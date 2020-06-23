import * as React from "react";
import "./DnD.scss";

class DnD extends React.Component {

  constructor(prods) {
    super(prods);

    this.state = {
      columnLeft: ['1', '2'],
      columnRight: ['4', '3'],
    }
  }

  render() {

    return (
      <div className={'dnd-container'}>
        <div className={'block'} draggable>
          1
        </div>
        <div className={'block'} draggable>
          2
        </div>
      </div>
    )
  }

}

export {DnD}
