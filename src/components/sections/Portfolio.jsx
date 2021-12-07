import "./Portfolio.css";

function Portfolio() {
    return (
        <div className="portfolio-container"> 
        <div className="portfolio-imagestyle">
            <img className="portfolio-image" src="../../img/IMG_2511.JPG" alt="" />
          <div className="portfolio-text">  <p>Från min resa i Nya Zeeland. Här befinner jag mig på Green Dragon, som ligger i Hobbiton & avnujer en öl. Ni som har sett Sagan om ringen vet nog vilken pub detta är. Detta är en milstolpe i livet för mig då jag är ett stort Tolkien fan</p> </div>
            </div>
            <div className="portfolio-imagestyle">
            <img className="portfolio-image" src="../../img/IMG_E2403.JPG" alt="" />
              <div className="portfolio-text"> <p>Här har vi en riktigt kunglig bild. Här står jag nämligen hemma hos Bilbo Baggins & Frodo Baggins och kallpratar lite med dem. Frodo som håller i kameran & bilbo som gick in för att sätta på lite te.</p> </div>
            </div>
            <div className="portfolio-imagestyle">
            <img className="portfolio-image" src="../../img/IMG_2894.JPG" alt="" />
             <div className="portfolio-text"> <p>Här står jag startklar och ska nu genomföra en IRONMAN KALMAR. Det är ett stort triathlon-evenemang som går ut på att 1. Simma 3.9 km, 2. Cykla 18 mil, 3. Springa 4,2 mil</p> </div>
            </div>
            <div className="portfolio-imagestyle">
            <img className="portfolio-image" src="../../img/MTZY5074.JPG" alt="" />
             <div className="portfolio-text"> <p>Här har jag precis kommit i mål och tiden jag gjorde det på var 14 timmar och 9 sekunder. Var mycket smärta att genomgå, men detta var verkligen bland det roligaste jag gjort & kommer definitivt att göra om detta</p> </div>
            </div>
        
        </div>
    );
}
export default Portfolio;