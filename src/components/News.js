import React, { Component } from 'react'
import Newsitem from './Newsitem'

export default class News extends Component {
  articles = [
    {
      "source": {
        "id": null,
        "name": "CBS Sports"
      },
      "author": "Patrick McDonald",
      "title": "2022 U.S. Open leaderboard: Live coverage, golf scores today, updates from Round 1 at The Country Club - CBS Sports",
      "description": "Live scores, updates and highlights from the first round of the 122nd U.S. Open",
      "url": "https://www.cbssports.com/golf/news/2022-u-s-open-leaderboard-live-coverage-golf-scores-today-updates-from-round-1-at-the-country-club/live/",
      "urlToImage": "https://sportshub.cbsistatic.com/i/r/2022/06/16/a491799a-bc9b-483a-a5c9-028fd577f8ee/thumbnail/1200x675/e3cf5fa547a7bfa7e5e9c3b026a5d968/us-open-flags-2022-g.png",
      "publishedAt": "2022-06-16T16:37:52Z",
      "content": "The 122nd U.S. Open gets underway Thursday with the national championship taking place at one of the oldest golf courses in the United States. The Country Club in Brookline, Massachusetts, received t… [+1033 chars]"
    },
    {
      "source": {
        "id": "cnn",
        "name": "CNN"
      },
      "author": "By <a href=\"/profiles/helen-regan\">Helen Regan</a>, <a href=\"/profiles/ivana-kottasova\">Ivana Kottasová</a>, Sana Noor Haq, Hafsa Khalil, <a href=\"/profiles/adrienne-vogt\">Adrienne Vogt</a> and <a href=\"/profiles/aditi-sandal\">Aditi Sangal</a>, CNN",
      "title": "Russia's war in Ukraine: Live updates - CNN",
      "description": "French President Emmanuel Macron, German Chancellor Olaf Scholz and Italian Prime Minister Mario Draghi are en route to the Ukrainian capital Kyiv, the Elysee Palace confirmed on Thursday.",
      "url": "https://www.cnn.com/europe/live-news/russia-ukraine-war-news-06-16-22/index.html",
      "urlToImage": "https://cdn.cnn.com/cnnnext/dam/assets/220614163315-02-ukraine-war-donbas-0612-super-tease.jpg",
      "publishedAt": "2022-06-16T16:34:00Z",
      "content": "Russia plans to withstand the Western sanctions and complete its goal in the Donbas region in eastern Ukraine, Kremlin spokesperson Dmitry Peskov told CNN Thursday. \r\nAsked by about Russias intention… [+2028 chars]"
    },
    {
      "source": {
        "id": "axios",
        "name": "Axios"
      },
      "author": "Andrew Solender",
      "title": "Jan. 6 panel to seek testimony from Ginni Thomas - Axios",
      "description": "Committee Chair Bennie Thompson said the invite will go out \"soon\"",
      "url": "https://www.axios.com/2022/06/16/ginni-thomas-jan-6-panel",
      "urlToImage": "https://images.axios.com/WKf80qRajol4lmVuhHauRhlf6Mg=/0x0:6541x3679/1366x768/2022/06/16/1655393444191.jpg",
      "publishedAt": "2022-06-16T16:16:52Z",
      "content": "The House select committee investigating the Jan. 6 attack plans to seek testimony from conservative activist Ginni Thomas, wife of Supreme Court Justice Clarence Thomas, the panels chair said Thursd… [+1321 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "CNBC"
      },
      "author": "Holly Ellyatt",
      "title": "European leaders visit Kyiv for talks on weapons, EU membership; UK announces new sanctions on Russia - CNBC",
      "description": "A trio of European leaders has arrived in Kyiv for talks while Russian forces are using \"all available firepower\" to pound the key target of Severodonetsk.",
      "url": "https://www.cnbc.com/2022/06/16/russia-ukraine-live-updates.html",
      "urlToImage": "https://image.cnbcfm.com/api/v1/image/107076919-16553872072022-06-16t134114z_2037651866_rc2xsu9dxyel_rtrmadp_0_ukraine-crisis-eu-leaders.jpeg?v=1655387233&w=1920&h=1080",
      "publishedAt": "2022-06-16T16:01:00Z",
      "content": "Ukrainian President Volodymyr Zelenskyy has said he is grateful for a new $1 billion support package including coastal defense, artillery and modern rocket systems as Russia presses home its advantag… [+920 chars]"
    },
    {
      "source": {
        "id": "techradar",
        "name": "TechRadar"
      },
      "author": "Axel Metz",
      "title": "Amazon Prime Day date announced for 2022 - and these early deals are live soon - TechRadar",
      "description": "Amazon confirms Prime Day 2022 will take place on July 12 and 13",
      "url": "https://www.techradar.com/news/amazon-prime-day-2022-date",
      "urlToImage": "https://cdn.mos.cms.futurecdn.net/iVv9B38JnYyiNAUuCFjFVN-1200-80.jpg",
      "publishedAt": "2022-06-16T15:57:30Z",
      "content": "Amazon has finally announced the dates for Prime Day - the yearly two-day sales bonanza held by the retailer.\r\nAmazon Prime Day 2022 is scheduled for Tuesday,July 12 and Wednesday,July 13, the retail… [+3966 chars]"
    },
    {
      "source": {
        "id": "the-wall-street-journal",
        "name": "The Wall Street Journal"
      },
      "author": "Sam Goldfarb, Will Horner, Dan Molinski, Orla McCaffrey, Jessica Fleetham, Bryan Mena, Akane Otani",
      "title": "Stock Market News Live Updates: Dow Drops 800 Points as Post-Fed Rally Fades - The Wall Street Journal",
      "description": "Full coverage of markets, a day after the Federal Reserve approved its biggest interest-rate increase since 1994.",
      "url": "https://www.wsj.com/livecoverage/stock-markets-today-fed-rates-06-16-2022",
      "urlToImage": "https://images.wsj.net/im-565403/social",
      "publishedAt": "2022-06-16T15:49:00Z",
      "content": "Investors dumped U.S. government bonds overnight but are now piling back in as they look to shelter from a sharp decline in stock prices.\r\nIn recent trading, the yield on the benchmark 10-year U.S. T… [+1121 chars]"
    },
    {
      "source": {
        "id": "usa-today",
        "name": "USA Today"
      },
      "author": "Bart Jansen, Chelsey Cox and Erin Mansfield, USA TODAY",
      "title": "Jan 6 live updates: Pence's role thwarting Trump takes center stage - USA TODAY",
      "description": "The Jan. 6 hearing Thursday will focus on Mike Pence's key role in refusing to carry out Donald Trump's plan to overturn the 2020 election.",
      "url": "https://www.usatoday.com/story/news/politics/2022/06/16/jan-6-live-updates-trump-pressure-pence/7623118001/",
      "urlToImage": "https://www.gannett-cdn.com/presto/2022/06/14/USAT/0688ff98-654a-4183-a17a-f56abd85b759-AP_Capitol_Riot_Investigation_3.jpg?auto=webp&crop=5245,2951,x0,y0&format=pjpg&width=1200",
      "publishedAt": "2022-06-16T15:45:00Z",
      "content": "WASHINGTON – Former Vice President Mike Pence's refusal to single-handedly reject electoral votes on Jan. 6, 2021, as former President Donald Trump pressured him to do, will be the subject of the Thu… [+7943 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "YouTube"
      },
      "author": null,
      "title": "Juror in Johnny Depp-Amber Heard trial speaks out for 1st time about verdict l GMA - Good Morning America",
      "description": "A member of the jury in the Depp-Heard defamation case told ABC News exclusively that \"a lot of Amber's story didn't add up\" and \"the majority of the jury fe...",
      "url": "https://www.youtube.com/watch?v=PCnFykaEtxY",
      "urlToImage": "https://i.ytimg.com/vi/PCnFykaEtxY/hqdefault.jpg",
      "publishedAt": "2022-06-16T15:03:02Z",
      "content": null
    },
    {
      "source": {
        "id": null,
        "name": "YouTube"
      },
      "author": null,
      "title": "Final 5:34 GAME 5 COMEBACK WIN Warriors vs Raptors - 2019 NBA Finals - NBA",
      "description": "With the Warriors facing elimination, Stephen Curry and Klay Thompson lead Golden State to a remarkable comeback win and force Game 6!Stay up-to-date on news...",
      "url": "https://www.youtube.com/watch?v=jwmiwtF_3z8",
      "urlToImage": "https://i.ytimg.com/vi/jwmiwtF_3z8/hqdefault.jpg",
      "publishedAt": "2022-06-16T14:50:57Z",
      "content": null
    },
    {
      "source": {
        "id": null,
        "name": "Hollywood Reporter"
      },
      "author": "Abbey White",
      "title": "‘Blonde’ Trailer Teases First Look at Ana de Armas as Marilyn Monroe in NC-17 Movie - Hollywood Reporter",
      "description": "Netflix has released the first look at Blonde, writer and director Andrew Dominik’s NC-17 take on the Marilyn Monroe story. Starring Ana de Armas as Monroe and based on the fictional novel of the same name by Joyce Carol Oates, the film is a reimagining of th…",
      "url": "https://www.hollywoodreporter.com/movies/movie-news/blonde-trailer-ana-de-armas-marilyn-monroe-nc-17-movie-1235166762/",
      "urlToImage": "https://www.hollywoodreporter.com/wp-content/uploads/2022/06/Blonde_00_44_24_13_c_R2b.jpg?w=1024",
      "publishedAt": "2022-06-16T14:48:45Z",
      "content": "Netflix has released the first look at Blonde, writer and director Andrew Dominik’s NC-17 take on the Marilyn Monroe story.\r\nStarring Ana de Armas as Monroe and based on the fictional novel of the sa… [+2835 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "YouTube"
      },
      "author": null,
      "title": "Teenage Mutant Ninja Turtles: Shredder's Revenge - Official Launch Trailer - IGN",
      "description": null,
      "url": "https://www.youtube.com/supported_browsers?next_url=https:%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DWn1eSAEbfls",
      "urlToImage": null,
      "publishedAt": "2022-06-16T14:41:46Z",
      "content": null
    },
    {
      "source": {
        "id": null,
        "name": "New York Times"
      },
      "author": "Lauren Hirsch",
      "title": "Revlon Files for Bankruptcy - The New York Times",
      "description": "The company has struggled to attract younger shoppers who are choosing celebrity makeup lines like those from Kylie Jenner and Rihanna.",
      "url": "https://www.nytimes.com/2022/06/16/business/revlon-bankruptcy.html",
      "urlToImage": "https://static01.nyt.com/images/2022/06/16/business/16economy-briefing-revlon/16economy-briefing-revlon-facebookJumbo.jpg",
      "publishedAt": "2022-06-16T14:36:29Z",
      "content": "Revlon was acquired by the billionaire Ron Perelman for $2.7 billion in 1985 through a hostile takeover, then described as one of the pivotal corporate battles of the era.\r\nIt acquired Elizabeth Arde… [+988 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "New York Post"
      },
      "author": "Callie Patteson",
      "title": "Biden was unhappy with Antony Blinken, Lloyd Austin for publicly saying US wants Ukraine to win: report - New York Post ",
      "description": "President Joe Biden was reportedly unhappy with his Defense and Secretary of State secretaries earlier this year after they publicly stated the US wanted Ukraine to defeat Russia.",
      "url": "https://nypost.com/2022/06/16/biden-unhappy-with-officials-saying-us-wants-ukraine-to-win/",
      "urlToImage": "https://nypost.com/wp-content/uploads/sites/2/2022/06/joe-biden-antony-blinken-lloyd-austin-ukraine.jpg?quality=75&strip=all&w=1024",
      "publishedAt": "2022-06-16T14:35:00Z",
      "content": "President Biden was reportedly unhappy with his secretaries of defense and state earlier this year after they publicly stated the US wanted Ukraine to defeat Russia in its brutal invasion that had be… [+4200 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "YouTube"
      },
      "author": null,
      "title": "Abbott plant halts production of baby formula - Good Morning America",
      "description": "The Michigan facility, which was offline for roughly four months over quality control and contamination concerns, has been hit by heavy rain, thunderstorms, ...",
      "url": "https://www.youtube.com/watch?v=2DJG7lVa5Xg",
      "urlToImage": "https://i.ytimg.com/vi/2DJG7lVa5Xg/hqdefault.jpg",
      "publishedAt": "2022-06-16T14:30:38Z",
      "content": null
    },
    {
      "source": {
        "id": "cnn",
        "name": "CNN"
      },
      "author": "Dakin Andone",
      "title": "Buffalo shooting suspect said he committed massacre 'for the future of the White race' in note apologizing to his family, affidavit says - CNN",
      "description": "The 18-year-old accused of killing 10 Black people at a Buffalo, New York, supermarket last month apologized to his family for carrying out the mass shooting, writing in a note he \"had to commit this attack\" because he cared \"for the future of the White race,…",
      "url": "https://www.cnn.com/2022/06/16/us/buffalo-shooting-suspect-federal-court/index.html",
      "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/220516011309-buffalo-shooting-police-scene-0514.jpg?c=16x9&q=w_800,c_fill",
      "publishedAt": "2022-06-16T14:27:00Z",
      "content": "The 18-year-old accused of killing 10 Black people at a Buffalo, New York, supermarket last month apologized to his family for carrying out the mass shooting, writing in a note he had to commit this … [+2597 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "New York Times"
      },
      "author": "Michael Levenson",
      "title": "Internet Explorer Is Shutting Down in a Burst of Nostalgia - The New York Times",
      "description": "Microsoft will be disabling IE and directing Windows users to its modern Edge web browser in coming months. The news inspired jokes, memes and even some fond memories.",
      "url": "https://www.nytimes.com/2022/06/15/business/internet-explorer-shutting-down.html",
      "urlToImage": "https://static01.nyt.com/images/2022/06/15/multimedia/15xp-explorer/15xp-explorer-facebookJumbo.jpg",
      "publishedAt": "2022-06-16T14:17:00Z",
      "content": "Internet Explorers inclusion in the ubiquitous Windows operating system and the requirement that it be used on certain government websites made the browser an inescapable part of daily life for milli… [+1400 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "The Guardian"
      },
      "author": "Adrian Horton",
      "title": "The Old Man review – Jeff Bridges shines in serviceable action series - The Guardian",
      "description": "The 72-year-old actor plays a fugitive of the past in a watchable drama that also works as a fantasy of hyper-competence in the sunset years",
      "url": "https://amp.theguardian.com/film/2022/jun/16/old-man-review-jeff-bridges-action-series-fx",
      "urlToImage": null,
      "publishedAt": "2022-06-16T14:08:00Z",
      "content": "TV reviewThe 72-year-old actor plays a fugitive of the past in a watchable drama that also works as a fantasy of hyper-competence in the sunset years\r\nThe Old Man, a serviceable new action series/pol… [+5159 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "New York Times"
      },
      "author": "Ben Sisario",
      "title": "Beyoncé Announces New Album ‘Renaissance,’ Out Next Month - The New York Times",
      "description": "The new project, apparently with the subtitle “Act I,” will be released on July 29, according to the singer’s social media accounts.",
      "url": "https://www.nytimes.com/2022/06/16/arts/music/beyonce-renaissance-new-album.html",
      "urlToImage": "https://static01.nyt.com/images/2022/06/17/multimedia/16beyonce1/16beyonce1-facebookJumbo.jpg",
      "publishedAt": "2022-06-16T13:53:29Z",
      "content": "Cue up the celebratory tweets: A new Beyoncé album is coming.\r\nEarly Thursday, Beyoncé updated her social media accounts to indicate that a new project called Renaissance, apparently with the subtitl… [+1545 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "New York Times"
      },
      "author": "Jim Robbins, Thomas Fuller, Christine Chung",
      "title": "Yellowstone Flooding Is a Sign of What’s to Come for National Parks - The New York Times",
      "description": "Record rainfall and mudslides forced closures just as tourism season ramped up. Virtually none of America’s national parks are untouched by extreme weather and climate change.",
      "url": "https://www.nytimes.com/2022/06/15/us/yellowstone-national-park-floods.html",
      "urlToImage": "https://static01.nyt.com/images/2022/06/15/us/15national-parks-1/15national-parks-1-facebookJumbo.jpg",
      "publishedAt": "2022-06-16T13:11:00Z",
      "content": "Millions of tourists are drawn each year to the wilderness and active geysers in Yellowstone, which sprawls across more than two million acres in the northwest corner of Wyoming and into Montana and … [+1554 chars]"
    },
    {
      "source": {
        "id": "bloomberg",
        "name": "Bloomberg"
      },
      "author": null,
      "title": "Monkeypox Cases Could Spread Unseen in US If 'Testing Bottlenecks' Don't Improve - Bloomberg",
      "description": null,
      "url": "https://www.bloomberg.com/tosv2.html?vid=&uuid=4fc027e0-ed84-11ec-9270-45564c72576b&url=L25ld3MvYXJ0aWNsZXMvMjAyMi0wNi0xNi9tb25rZXlwb3gtY2FzZXMtY291bGQtc3ByZWFkLXVuc2Vlbi1pbi11cy1pZi10ZXN0aW5nLWJvdHRsZW5lY2tzLWRvbi10LWltcHJvdmU=",
      "urlToImage": null,
      "publishedAt": "2022-06-16T13:00:00Z",
      "content": "To continue, please click the box below to let us know you're not a robot."
    }
  ]


  constructor() {
    super();
    this.state = {
      articles: this.articles,
      loading: false
    }
  }

  render() {
    return (
      <div className='container my-3'>
        <h2>Top Headlines.</h2>
        <div className="row">
          <div className="col-md-4">
            <Newsitem title="mytitle" description="mydesc" imageUrl="https://sportshub.cbsistatic.com/i/r/2022/06/16/a491799a-bc9b-483a-a5c9-028fd577f8ee/thumbnail/1200x675/e3cf5fa547a7bfa7e5e9c3b026a5d968/us-open-flags-2022-g.png" newsUrl="todo" />
          </div>
          <div className="col-md-4">
            <Newsitem title="mytitle" description="mydesc" />
          </div>
          <div className="col-md-4">
            <Newsitem title="mytitle" description="mydesc" />
          </div>
        </div>
      </div>
    )
  }


}

