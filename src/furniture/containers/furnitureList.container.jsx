import React, { Component } from 'react';
import { connect } from 'react-redux';
import FList from '../components/fList.component';
import { Row, Col, Tabs, Tab } from 'react-materialize';
import { bindActionCreators } from 'redux';
import { selectRoom } from '../../rooms/actions/rooms.action'

class FurnitureList extends Component {

  render() {
    const intro = 'Furniture';
    const [rooms, roomSelected] = [this.props.rooms, this.props.roomSelected];
    const roomNames =  Object.keys(rooms);
    var furniture = {};


    if (roomSelected) {
      Object.assign(furniture, rooms[roomSelected].furniture);
    }
  
    return (
      <div>
        <Row>
          <Col s={12}>
            <div className=''>
              <ul className="tabs z-depth-1">
                {roomNames.map((room) => {
                  if(room === this.roomSelected) {
                    return (
                      <li className="tab col s3 active"><span className='active' onClick={() => {this.changeRoom(room)}} style={{'cursor':'default'}}>{room}</span></li>
                    )
                  }
                  return (
                    <li className="tab col s3" ><span onClick={() => {this.props.selectRoom(room)}} style={{'cursor':'default'}}>{room}</span></li>
                  )
                })}
              </ul>
            </div>
          </Col>
        </Row>

        <Row>
          <Col s={12} l={12}>
            <div>
                <FList
                  list={ furniture }
                  intro={ intro }
                  view="furniture"
                />
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}

function mapStateToProps({ rooms, roomSelected }) {
  return { rooms, roomSelected };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({selectRoom}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(FurnitureList);
