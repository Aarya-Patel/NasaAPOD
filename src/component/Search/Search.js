import React, { Component } from "react";
import SeachForm from "../SearchForm/SearchForm.js";
import getData from "../../api/APIData.js";
import Error from "../Error/Error.js";
import DataDisplay from "../DataDisplay/DataDisplay.js";
import "./SearchStyles.css";

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      apiData: {
        ok: true,
        copyright: "Dzmitry Kananovich",
        date: "2020-06-21",
        explanation:
          "It may look like Earthrise, but it's actually Venus-set. Just after sunrise two days ago, both the Moon and Venus also rose.  But then the Moon overtook Venus. In the featured image sequence centered on the Moon, Venus is shown increasingly angularly close to the Moon. In the famous Earthrise image taken just over 50 years ago, the Earth was captured rising over the edge of the Moon, as seen from the Apollo 8 crew orbiting the Moon. This similar Venus-set image was taken from Earth, of course, specifically Estonia.  Venus shows only a thin crescent because last week it passed nearly in front of the Sun, as seen from Earth.  The Moon shows only a thin crescent because it will soon be passing directly in front of the Sun, as seen from Earth. Today, in fact, two days after this image was taken, the Moon will create a solar eclipse, with a thin swath across the Earth treated to an annular solar eclipse.    Gallery: Notable images of the Venus - Mooon conjunction of 2020 June submitted to APOD",
        hdurl:
          "https://apod.nasa.gov/apod/image/2006/VenusSet_Kananovich_1000.jpg",
        media_type: "image",
        service_version: "v1",
        title: "Moon Occults Venus",
        url:
          "https://apod.nasa.gov/apod/image/2006/VenusSet_Kananovich_1000.jpg",
      },
    };
  }

  getApiData = async (date) => {
    const data = await getData(date);
    this.setState({ apiData: data });
  };

  render() {
    const { ok } = this.state.apiData;
    return (
      <div className="search-box">
        <h1 className="search-title">Search</h1>
        <p>
          The Astronomy Picture of the Day (APOD) is the most used API offered
          by NASA. <br />
          It's incredible imagery transcends our galaxies and offers a creative
          way to learn about the universe around us. <br />
          Try putting a date below and see what pops up!
        </p>
        <SeachForm getApiData={this.getApiData} />
        <div className="data-container">
          {ok ? <DataDisplay data={this.state.apiData} /> : <Error />}
        </div>
      </div>
    );
  }
}

export default Search;
