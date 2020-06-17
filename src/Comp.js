import * as React from "react";
import DocumentMeta from 'react-document-meta';
import {Helmet} from "react-helmet";

class CustomComp extends React.Component {

  render() {
    const meta = {
      title: 'Some Meta Title',
      description: 'I am a description, and I can create multiple tags',
      canonical: 'http://example.com/path/to/page',
      meta: {
        charset: 'utf-8',
        name: {
          keywords: 'react,meta,document,html,tags'
        }
      }
    }

    return (
      <div className={'component'}>
        <Helmet>
          <meta charSet="utf-8"/>
          <meta property="og:title" content="Game | testMMMM"/>
          <meta name="description" property="og:description" content="testMMMM ~10 player game"/>
          <meta property="og:locale" content="en_US"/>
          <meta property="og:type" content="website"/>
          <meta property="og:site_name" content="testMMMM"/>
          <meta name="image" property="og:image" content="https://game-0823.web.app/favicon.ico"/>
          <meta property="og:image:secure_url" content="https://game-0823.web.app/favicon.ico"/>
          <meta property="og:image:width" content="250"/>
          <meta property="og:image:height" content="200"/>
          <meta property="og:image:alt" content="testMMMM"/>
          <link rel="canonical" href="https://game-0823.web.app/mc"/>
        </Helmet>
        <head title={'bolster'}>
          <title>tttt</title>
          <DocumentMeta {...meta} extend/>
          head
        </head>
        head
      </div>
    )
  }

}

export {CustomComp}
