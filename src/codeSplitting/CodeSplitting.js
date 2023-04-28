import React, { Suspense } from "react";

const Comments = React.lazy(() => import("./Comments"));
const Photos = React.lazy(() => import("./Photos"));

export default function CodeSplitting() {
  const [tab, setTab] = React.useState("photos");

  return (
    <div>
      <Suspense fallback={<h5>Loading...</h5>}>
        {tab === "photos" ? <Photos /> : <Comments />}
      </Suspense>
    </div>
  );
}
