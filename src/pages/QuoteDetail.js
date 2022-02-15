import { Fragment } from "react";
import { useParams, Route, Link , useRouteMatch } from "react-router-dom";

import Comments from "../components/comments/Comments";
import HighlightedQuote from "../components/quotes/HighlightedQuote";

const DUMMY_QUOTES = [
  { id: "q1", author: "Max", text: "Learning React is Fun" },
  { id: "q2", author: "Sam", text: "Learning Angular is Great" },
];
const QuoteDetail = () => {
    const match = useRouteMatch();
    console.log(match)
  const params = useParams();

  const quote = DUMMY_QUOTES.find((quote) => quote.id === params.quoteId);

  if (!quote) {
    return <p>No quote found!</p>;
  }

  return (
    <Fragment>
      <HighlightedQuote text={quote.text} author={quote.author} />
      <Route path={match.path} exact>
        <div className="centered">
          <Link className="btn--flat" to={`${match.url}/comments`}>
            Load Comments
          </Link>
        </div>
      </Route>
      <Route path={`${match.path}/comments`}>
        <Comments />
      </Route>
      {/* <Route path={`/quotes/:quoteId/comments`}></Route>  - Should also work as it is not a link*/}
    </Fragment>
  );
};

export default QuoteDetail;
