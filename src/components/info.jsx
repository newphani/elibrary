import "../style/info.css";
const Info = () => {
  return (
    <div className="info">
      <div className="first">
        <div className="img">
          <img
            src="https://www.greenwichlibrary.org/wp-content/uploads/2018/10/DSC_0838-1024x400.jpg"
            alt=""
          />
        </div>
        <div className="explore">
          <h3>EXPLORE</h3>
          <h1>eBooks</h1>
          <h2>OverDrive</h2>
          <p>
            Download thousands of eBooks directly to your device, <br />
            including the hard-to-get ebook Express Collection. <br />
            Check out up to 20 items and hold up to 15 items. <br />
          </p>
          <a href="/">Explore OverDrive</a>
          <h2>Hoopla Comics</h2>
          <p>
            Download comics from Marvel, DC, Fantagraphics, <br />
            Image, and more via Hoopla. Take out each comic for up <br />
            to 21 days.
          </p>
          <a href="/">Explore Hoopla Comics</a>
        </div>
      </div>
      <div className="first">
        <div className="img">
          <img
            src="https://www.greenwichlibrary.org/wp-content/uploads/2021/11/LinkedInLearning-1024x400.jpg"
            alt=""
          />
        </div>
        <div className="explore">
          <h3>EXPLORE</h3>
          <h1>Digital Learning</h1>
          <p>
            LinkedIn Learning (formerly Lynda) is an online <br />
            educational site that features thousands of courses and <br />
            video tutorials where you can discover, complete, and <br />
            track courses related to your field and interests.
          </p>
        </div>
      </div>
      <div className="first">
         <div className="img"> 
            <img src="https://www.greenwichlibrary.org/wp-content/uploads/2021/11/LinkedInLearning-1024x400.jpg" alt="" />
        </div> 
        <div className="explore magazine">
          {/* <h3>EXPLORE</h3> */}
          <h1>Magazines</h1>
          <p>
            For your convenience, thousands of magazines are available now to
            borrow <br />
            through OverDrive and Libby. This includes hot titles like The{" "}
            <br />
            Economist and Bon Appetit. (Formerly available through RBdigital.){" "}
            <br />
          </p>
          <a href="/">Explore OverDrive Magazines</a>
        </div>
      </div>
      <div className="first">
        <div className="img">
          <img
            src="https://www.greenwichlibrary.org/wp-content/uploads/2018/10/DSC_0824-1024x400.jpg"
            alt=""
          />
        </div>
        <div className="explore">
          <h3>EXPLORE</h3>
          <h1>Newspapers</h1>
          <p>
          Enjoy complimentary digital access to The New York <br />
           Times online when you’re at the Library. <br />
          </p>
            <ul>
                <li><a href="/">Access the New York Times <h3><em>*In Library access only</em></h3></a></li>
                <p>Enjoy complimentary digital access to The Wall Street <br />
                 Journal online when you’re at the Main Library. <br />
                </p>
                <li><a href="/">Access the Wall Street Journal<h3><em>*Main Library computer access only</em></h3></a></li>
                <p>Enjoy complimentary digital access to PressReader with <br /> over 3,500 newspapers in over 60 languages. Download <br />
                 the <a href="/"> Apple app</a> or <a href="/">Android app</a>.
                </p>
                <li><p><a href="/">Access PressReader</a>*Library Card and PIN required</p>
                </li>
            </ul>
        </div>
      </div>
    </div>
  );
};
export default Info;
