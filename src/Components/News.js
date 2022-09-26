import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";

export default class News extends Component {
  static defaultProps = {
    country: "in",
    pageSize: "8",
  };
  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
  };
  articles = [
    {
      source: { id: "the-washington-post", name: "The Washington Post" },
      author: "Yasmeen Abutaleb",
      title:
        "Anthony Fauci, face of coronavirus response, to retire in December - The Washington Post",
      description:
        "Anthony S. Fauci, the nation’s preeminent infectious-disease expert, became the face of the coronavirus pandemic response under two presidents.",
      url: "https://www.washingtonpost.com/health/2022/08/22/fauci-retiring/",
      urlToImage:
        "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/KNPBFOB6GUI6XNMLCYR7MJTZMA.jpg&w=1440",
      publishedAt: "2022-08-22T16:43:19Z",
      content:
        "Comment on this story\r\nAnthony S. Fauci, the nations preeminent infectious-disease expert who achieved unprecedented fame while enduring withering political attacks as the face of the coronavirus pan… [+14377 chars]",
    },
    {
      source: { id: null, name: "ESPN" },
      author: "Kevin Seifert",
      title:
        "Seeking backup options behind Kirk Cousins, Minnesota Vikings acquire quarterback Nick Mullens from Las Vegas Raiders - ESPN",
      description:
        "The Minnesota Vikings on Monday added quarterback Nick Mullens, acquiring him from the Las Vegas Raiders for a conditional 2024 draft pick.",
      url: "https://www.espn.com/nfl/story/_/id/34441243/seeking-backup-options-kirk-cousins-minnesota-vikings-acquire-quarterback-nick-mullens-las-vegas-raiders",
      urlToImage:
        "https://a4.espncdn.com/combiner/i?img=%2Fphoto%2F2022%2F0822%2Fr1051621_1296x729_16%2D9.jpg",
      publishedAt: "2022-08-22T16:23:02Z",
      content:
        "EAGAN, Minn. -- The Minnesota Vikings acquired quarterback Nick Mullens from the Las Vegas Raiders on Monday for a conditional 2024 draft pick, giving them an additional option behind starter Kirk Co… [+2099 chars]",
    },
    {
      source: { id: "reuters", name: "Reuters" },
      author: null,
      title: "Nasdaq slumps more than 2% on fears of aggressive Fed - Reuters",
      description:
        "Wall Street's main indexes tumbled on Monday in a dour start to the week as investors worried about hawkish signals from U.S. Federal Reserve policymakers against the backdrop of slowing economic growth.",
      url: "https://www.reuters.com/markets/europe/futures-drop-rate-hike-worries-persist-2022-08-22/",
      urlToImage:
        "https://www.reuters.com/resizer/W8jbTofpsrICVFRgkm0GzXr4AOk=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/44QLIRGG2JNTZHZW7ZO6ZMRFN4.jpg",
      publishedAt: "2022-08-22T16:12:00Z",
      content:
        "Aug 22 (Reuters) - Wall Street's main indexes tumbled on Monday in a dour start to the week as investors worried about hawkish signals from U.S. Federal Reserve policymakers against the backdrop of s… [+3899 chars]",
    },
    {
      source: { id: null, name: "New York Times" },
      author: "Matt Richtel, Annie Flanagan",
      title:
        "A Teen’s Journey Into the Internet’s Darkness and Back Again - The New York Times",
      description:
        "As anxiety and depression soar among adolescents, researchers struggle to understand how exactly social media affects mental health.",
      url: "https://www.nytimes.com/2022/08/22/health/adolescents-mental-health-technology.html",
      urlToImage:
        "https://static01.nyt.com/images/2022/08/23/science/00SCI-ADOLESCENTS-TECH1b/merlin_208307091_fa27dbae-82e3-4676-af37-161e7876ef0a-facebookJumbo.jpg",
      publishedAt: "2022-08-22T16:09:31Z",
      content:
        "At 15, C was hospitalized for a week, and at 18 for longer, after C took a bunch of pills, everything I could find.\r\nHow would you believe its going to get better when youre growing into your adult b… [+1153 chars]",
    },
    {
      source: { id: "cbs-news", name: "CBS News" },
      author: null,
      title:
        'Car explosion kills Daria Dugina, daughter of Russian nationalist known as "Putin\'s brain" - CBS News',
      description:
        'Russian authorities say the daughter of a nationalist ideologist who is often referred to as "Putin\'s brain" died in a car explosion on the outskirts of Moscow.',
      url: "https://www.cbsnews.com/news/daria-dugina-car-explosion-killed-russia-daughter-alexander-dugin/",
      urlToImage:
        "https://assets1.cbsnewsstatic.com/hub/i/r/2022/08/21/ae4ca4ad-0a5d-4db7-b147-6a220457b083/thumbnail/1200x630g2/1a4966e560154e9cc734cc5b60a5ad39/2022-08-21t125816z-1131248031-rc201w9hpug5-rtrmadp-3-russia-carbomb.jpg",
      publishedAt: "2022-08-22T16:06:00Z",
      content:
        'Moscow — The daughter of an influential Russian political theorist who is often referred to as "Putin\'s brain" was killed in a car bombing on the outskirts of Moscow, officials said Sunday.\r\nThe Mosc… [+5110 chars]',
    },
    {
      source: {
        id: "the-wall-street-journal",
        name: "The Wall Street Journal",
      },
      author: "Ian Lovett and Mauro Orru",
      title:
        "Ukraine’s Zelensky Warns Against Trial of Prisoners Captured at Azovstal Steel Plant - The Wall Street Journal",
      description:
        "The leader of a Russian-backed breakaway region announced details of plans to put Ukrainian soldiers on trial, a move that President Zelensky warned would mean an end to negotiations between Kyiv and Moscow.",
      url: "https://www.wsj.com/articles/ukraines-zelensky-warns-against-trial-of-prisoners-captured-at-azovstal-steel-plant-11661166705",
      urlToImage: "https://images.wsj.net/im-608143/social",
      publishedAt: "2022-08-22T15:46:00Z",
      content:
        "ODESSA, UkraineThe leader of a Russian-backed breakaway region in eastern Ukraine announced details of plans to put captured Ukrainian soldiers on trial in Mariupol, a move that Ukrainian President V… [+453 chars]",
    },
    {
      source: { id: null, name: "CNBC" },
      author: "Michael Wayland",
      title: "Ford to eliminate 3,000 jobs in an effort to cut costs - CNBC",
      description:
        "Ford Motor is cutting about 3,000 jobs from its global workforce, a majority of which are in North America.",
      url: "https://www.cnbc.com/2022/08/22/ford-to-cut-3000-jobs-primarily-in-north-america.html",
      urlToImage:
        "https://image.cnbcfm.com/api/v1/image/107084781-1657059242501-IMG_1254b.jpg?v=1657059326&w=1920&h=1080",
      publishedAt: "2022-08-22T15:35:41Z",
      content:
        "DETROIT Ford Motor is cutting about 3,000 jobs from its global workforce, as the automaker attempts to lower costs as part of restructuring efforts under CEO Jim Farley.\r\nFord began notifying workers… [+2185 chars]",
    },
    {
      source: { id: "cnn", name: "CNN" },
      author: "Chris Boyette and Michelle Watson, CNN",
      title:
        "Teachers at Ohio's largest school district vote to strike just before start of school year - CNN",
      description:
        "Teachers at Ohio's largest school district voted Sunday to go on strike for better learning and teaching conditions, just days before school is scheduled to start, according to the teachers' union.",
      url: "https://www.cnn.com/2022/08/22/us/ohio-school-district-strike/index.html",
      urlToImage:
        "https://cdn.cnn.com/cnnnext/dam/assets/220822011544-02-ohio-school-district-strike-super-tease.jpg",
      publishedAt: "2022-08-22T15:13:00Z",
      content:
        "(CNN)Teachers at Ohio's largest school district voted Sunday to go on strike for better learning and teaching conditions, just days before school is scheduled to start, according to the teachers' uni… [+2245 chars]",
    },
    {
      source: { id: "google-news", name: "Google News" },
      author: null,
      title:
        "Judge warns redactions in Trump warrant affidavit could render it ‘meaningless’ - The Hill",
      description: null,
      url: "https://news.google.com/__i/rss/rd/articles/CBMigwFodHRwczovL3RoZWhpbGwuY29tL3BvbGljeS9uYXRpb25hbC1zZWN1cml0eS8zNjEwODc4LWp1ZGdlLXdhcm5zLXJlZGFjdGlvbnMtaW4tdHJ1bXAtd2FycmFudC1hZmZpZGF2aXQtY291bGQtcmVuZGVyLWl0LW1lYW5pbmdsZXNzL9IBAA?oc=5",
      urlToImage: null,
      publishedAt: "2022-08-22T15:08:00Z",
      content: null,
    },
    {
      source: { id: "cnn", name: "CNN" },
      author: "Katie Hunt, CNN",
      title:
        "Dogs' eyes well up with tears of joy when reunited with their owners - CNN",
      description:
        "New research has suggested a dog's eyes well up with tears of happiness when reunited with their owner after a period of absence. The tears may help cement the bond between human and dog -- a relationship that goes back tens of thousands of years.",
      url: "https://www.cnn.com/2022/08/22/world/dogs-tears-emotions-scn-wellness/index.html",
      urlToImage:
        "https://cdn.cnn.com/cnnnext/dam/assets/220818142713-dogs-tears-emotions-wellness-stock-super-tease.jpg",
      publishedAt: "2022-08-22T15:04:00Z",
      content:
        "(CNN)A wagging tail, a loving lick, a playful jump, a heart-melting gaze. You know when your dog is happy to see you. \r\nNow, new research from Japanese scientists suggests that a dog's eyes may well … [+2717 chars]",
    },
    {
      source: { id: null, name: "New York Times" },
      author: "Benjamin Hoffman",
      title: "Could Albert Pujols Get to 700 Home Runs? - The New York Times",
      description:
        "Albert Pujols was hitting .189 on July 4. Since then, he has hit .408 with nine home runs. Could he join a club only occupied by Barry Bonds, Hank Aaron and Babe Ruth?",
      url: "https://www.nytimes.com/2022/08/22/sports/baseball/albert-pujols-700-homers.html",
      urlToImage:
        "https://static01.nyt.com/images/2022/08/22/multimedia/22mlb-score-pujols-top/22mlb-score-pujols-top-facebookJumbo.jpg",
      publishedAt: "2022-08-22T15:00:54Z",
      content:
        "All of that leaves Pujols only five home runs short of passing Rodriguez (696) for fourth on the career list and eight short of reaching 700 for his career, with 40 Cardinals games remaining this sea… [+1143 chars]",
    },
    {
      source: { id: "cnn", name: "CNN" },
      author: "Sandee LaMotte, CNN",
      title:
        "Brain stimulation improves short-term memory in older adults for a month, study finds - CNN",
      description:
        "Undergoing mild brain stimulation for four days in a row improved short-term memory in older adults, including those with mild cognitive decline, a new study found.",
      url: "https://www.cnn.com/2022/08/22/health/brain-stimulation-memory-wellness/index.html",
      urlToImage:
        "https://cdn.cnn.com/cnnnext/dam/assets/220820000216-brain-waves-digital-illustration-super-tease.jpeg",
      publishedAt: "2022-08-22T15:00:00Z",
      content:
        "(CNN)Up for a little noninvasive brain stimulation to boost your aging memory for that next big project, work meeting or family get-together? One day science may be able to offer such treatments, new… [+9397 chars]",
    },
    {
      source: { id: "the-verge", name: "The Verge" },
      author: "Charles Pulliam-Moore",
      title:
        "In lieu of a trailer, Knives Out 2 finally has a release date - The Verge",
      description:
        "Glass Onion: A Knives Out Mystery — out December 23rd — from director Rian Johnson is coming to Netflix this winter, but we’ll have to wait a bit longer for the film’s theatrical release.",
      url: "https://www.theverge.com/2022/8/22/23316312/knives-out-2-release-date-glass-onion-netflix",
      urlToImage:
        "https://cdn.vox-cdn.com/thumbor/NqCOp1kjvsshDThmzpatwQoAFgs=/934x0:8383x3900/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/23962313/13x31_AW_GOProject_HIGH_RES.jpeg",
      publishedAt: "2022-08-22T14:58:38Z",
      content:
        "Rian Johnsons Glass Onion: A Knives Out Mystery is coming to Netflix this winter\r\nThe cast of Glass Onion: A Knives Out Mystery\r\nImage: Netflix\r\nGiven the almost half a billion dollars Netflix spent … [+1432 chars]",
    },
    {
      source: { id: null, name: "Page Six" },
      author: "Leah Bitsky",
      title:
        "Ben Affleck jets off with Matt Damon after Jennifer Lopez wedding - Page Six",
      description:
        "It is unclear whether the newlyweds have another honeymoon in the works, as they already enjoyed a romantic trip to Paris after legally marrying in Las Vegas.",
      url: "https://pagesix.com/2022/08/22/ben-affleck-jets-off-with-matt-damon-after-j-lo-wedding/",
      urlToImage:
        "https://pagesix.com/wp-content/uploads/sites/3/2022/08/ben-affleck-matt-damon-61-1.jpg?quality=75&strip=all&w=1200",
      publishedAt: "2022-08-22T14:55:00Z",
      content:
        "Ben Affleck and Matt Damon are giving “The Departed” a whole new meaning.\r\nThe longtime best friends jetted off together Sunday instead of Affleck honeymooning with Jennifer Lopez after the couple’s … [+2814 chars]",
    },
    {
      source: { id: "engadget", name: "Engadget" },
      author: "https://www.engadget.com/about/editors/jon-fingas",
      title:
        "James Webb telescope captures surreal images of Jupiter's auroras - Engadget",
      description:
        "The James Webb telescope has captured photos of Jupiter that highlight the planet's ghostly auroras..",
      url: "https://www.engadget.com/james-webb-space-telescope-jupiter-aurora-photos-143727205.html",
      urlToImage:
        "https://s.yimg.com/os/creatr-uploaded-images/2022-08/28c416e0-2224-11ed-be1b-db514f3ecfe6",
      publishedAt: "2022-08-22T14:39:48Z",
      content:
        "The James Webb Space Telescope team is still flexing its ability to capture detailed images close to home. Webb has snapped a pair of near-infrared photos showing Jupiter's polar auroras. You can als… [+884 chars]",
    },
    {
      source: { id: null, name: "NBC 5 Dallas-Fort Worth" },
      author: null,
      title:
        "Dallas First Responders Rescue Drivers From Flooded Cars After Flash Flooding - NBC 5 Dallas-Fort Worth",
      description:
        "Heavy rain led to flash flooding in Dallas, leaving some drivers stranded and others fleeing their cars as high water swept them off the road.",
      url: "https://www.nbcdfw.com/weather/weather-connection/dallas-first-responders-rescue-drivers-from-flooded-cars-after-flash-flooding/3053731/",
      urlToImage:
        "https://media.nbcdfw.com/2022/08/Dallas-Flooded-Car.jpg?quality=85&strip=all&resize=1200%2C675",
      publishedAt: "2022-08-22T14:29:03Z",
      content:
        "<ul><li>By some estimates, more than 10 inches of rain have fallen in the East Dallas area. There are several road closures due to high water. Drivers are encouraged to avoid driving Monday and use e… [+2095 chars]",
    },
    {
      source: { id: null, name: "CNBC" },
      author: "Sofia Pitt",
      title:
        "Apple will let you repair certain MacBooks yourself beginning Tuesday - CNBC",
      description:
        "Starting Aug. 23, you'll be able to buy parts and tools to fix your M1 MacBook Pro or MacBook Air from Apple.",
      url: "https://www.cnbc.com/2022/08/22/apple-self-repair-for-macbook.html",
      urlToImage:
        "https://image.cnbcfm.com/api/v1/image/107107225-1661176798269-Apple-Self-Service-Mac-Repair-August-2022-hero1.jpg?v=1661176891&w=1920&h=1080",
      publishedAt: "2022-08-22T14:20:13Z",
      content:
        "Apple is expanding its Self Service Repair program to include some of its laptops, which means you'll be able to do some repairs yourself.\r\nUsers with MacBook models that have M1 chips, which include… [+1481 chars]",
    },
    {
      source: { id: null, name: "YouTube" },
      author: null,
      title: "Saints Row Review - GameSpot",
      description: null,
      url: "https://www.youtube.com/supported_browsers?next_url=https:%2F%2Fwww.youtube.com%2Fwatch%3Fv%3Dpv4NEvH3-KU",
      urlToImage: null,
      publishedAt: "2022-08-22T14:00:25Z",
      content: null,
    },
    {
      source: { id: "financial-times", name: "Financial Times" },
      author: "Ian Johnston",
      title:
        "Global stocks drop on recession and central bank rate-rise worries - Financial Times",
      description:
        "News, analysis and comment from the Financial Times, the worldʼs leading global business publication",
      url: "https://www.ft.com/content/82fda0cb-4122-430a-95c5-881d1ad2b3c4",
      urlToImage: null,
      publishedAt: "2022-08-22T13:53:56Z",
      content:
        "Expert insights, analysis and smart data help you cut through the noise to spot trends,\r\nrisks and opportunities.\r\nJoin over 300,000 Finance professionals who already subscribe to the FT.",
    },
    {
      source: { id: "the-washington-post", name: "The Washington Post" },
      author: "Jonathan Edwards",
      title:
        "University of Michigan library announces Galileo manuscript was a fake - The Washington Post",
      description:
        "For nearly a century, University of Michigan librarians thought their Galileo manuscript was “one of the great treasures” of their collection.",
      url: "https://www.washingtonpost.com/nation/2022/08/22/galileo-fake-forgery-manuscript/",
      urlToImage:
        "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/3IQALJBB6UI63JZPDZYUSBZPXQ.jpg&w=1440",
      publishedAt: "2022-08-22T13:48:00Z",
      content:
        "Comment on this story\r\nUsing his newly built telescope, Galileo Galilei gazed up at the sky in January 1610, spotted several bright objects around Jupiter and spent weeks plotting how they changed po… [+4247 chars]",
    },
  ];
  constructor() {
    super();
    this.state = { articles: this.articles, loading: false, page: 1 };
  }

  async componentDidMount() {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=9bc57b952db64bf69abbed7fa96dcc25&page=1&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let ftch = await fetch(url);
    let prs = await ftch.json();
    this.setState({ articles: prs.articles, loading: false });
  }
  firstPage = async () => {
    console.log("wp");

    let url = `https://newsapi.org/v2/top-headlines?country=${
      this.props.country
    }&category=${
      this.props.category
    }&apiKey=9bc57b952db64bf69abbed7fa96dcc25&page=${
      this.state.page - 1
    }&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let ftch = await fetch(url);
    let prs = await ftch.json();

    this.setState({
      page: this.state.page - 1,
      articles: prs.articles,
      totalResults: prs.totalResults,
      loading: false,
    });
  };
  lastPage = async () => {
    console.log("done");
    if (
      !(
        this.state.page + 1 >
        Math.ceil(this.state.totalResults / this.props.pageSize)
      )
    ) {
      let url = `https://newsapi.org/v2/top-headlines?country=${
        this.props.country
      }&category=${
        this.props.category
      }&apiKey=9bc57b952db64bf69abbed7fa96dcc25&page=${
        this.state.page + 1
      }&pageSize=${this.props.pageSize}`;
      this.setState({ loading: true });
      let ftch = await fetch(url);
      let prs = await ftch.json();

      this.setState({
        page: this.state.page + 1,
        articles: prs.articles,
        loading: false,
      });
    }
  };
  render() {
    return (
      <div className="container my-3">
        <h1 className="text-center">Kara News</h1>

        <div className="text-center"> {this.state.loading && <Spinner />}</div>

        <div className="row">
          {!this.state.loading &&
            this.state.articles.map((element) => {
              return (
                <div key={element.url} className="col md-3">
                  <NewsItem
                    myTitle={element.title}
                    myDescription={element.description}
                    thisImg={element.urlToImage}
                    newsUrl={element.newsUrl}
                  />
                </div>
              );
            })}
        </div>
        <div className=" container d-flex justify-content-around">
          <button
            onClick={this.firstPage}
            disabled={this.state.page <= 1}
            type="button"
            className="btn btn-dark"
          >
            &larr;Previous
          </button>
          <button
            disabled={
              this.state.page + 1 >
              Math.ceil(this.state.totalResults / this.props.pageSize)
            }
            type="button"
            className="btn btn-dark"
            onClick={this.lastPage}
          >
            Next&rarr;
          </button>
        </div>
      </div>
    );
  }
}
