import React from 'react';
import { translate } from "react-i18next";

class App extends React.Component{
  handleClick = (lang) => {
    this.props.i18n.changeLanguage(lang);
  };

  render() {
    const {t} = this.props;
    return (
        <React.Fragment>
          <div>
            <button onClick={() => this.handleClick('en')}>
              English
            </button>
            <button onClick={() => this.handleClick('hin')}>
              Hindi
            </button>
            <button onClick={() => this.handleClick('ger')}>
              German
            </button>
          </div>

          <div className="App">
              <h1>
                  {t('Introduction')}
              </h1>
            {t('Content')}
      </div>
        </React.Fragment>
    );
  }

  }

export default translate("translations")(App);
