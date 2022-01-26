import React from "react"

export default class Info extends React.Component {
    render() {
        const title = "This is my title.";
        const showTitle = false;
      
        if (showTitle) {
          return (
            <div>
              <h1>{showTitle ? title : ""}</h1>
              <p>Manage your stuff</p>
            </div>
          );
        } else {
          return <p>empty</p>
        }
    }
}

