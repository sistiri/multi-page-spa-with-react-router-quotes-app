import { Fragment } from "react";
import { useParams, Route } from "react-router-dom";

import Comments from '../components/comments/Comments'


const QuoteDetail = () => {
  const params = useParams();
  
  return (
    <Fragment>
      <h1>Quote Detail Page</h1>
      <p>{params.quoteId}</p>
      <Route path={`/quotes/${params.quoteId}/comments`}>
      <Comments />
      </Route>
      {/* <Route path={`/quotes/:quoteId/comments`}></Route>  - Should also work as it is not a link*/}
      
    </Fragment>
  );
};

export default QuoteDetail;
