// Write your code here
import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import AppointmentItem from '../AppointmentItem'

const initialAppointmentsList = []
class Appointments extends Component {
  state = {
    appointmentsList: initialAppointmentsList,
    title: '',
    date: '',
    isStared: false,
  }

  addAppointment = () => {
    const {appointmentsList, title, date} = this.state
    const newAppointment = {
      id: uuidv4(),
      title,
      date,
      isStared: false,
    }
    this.setState(prevState => ({
      appointmentsList: [...prevState.appointmentsList, newAppointment],
      title: '',
      date: '',
    }))
  }

  toStarOrDeStarAppointment = id => {
    const {appointmentsList} = this.state
    const filteredAppointment = appointmentsList.filter(each => each.id === id)
    const getIsStaredValue = filteredAppointment[0].isStared
    const filteredObject = {
      ...filteredAppointment[0],
      isStared: !getIsStaredValue,
    }
    this.setState(prevState => ({
      appointmentsList: [...prevState.appointmentsList, filteredObject],
    }))
  }

  getAppointmentTitle = event => {
    this.setState({title: event.target.value})
  }

  getAppointmentDate = event => {
    this.setState({date: event.target.value})
  }

  render() {
    const {appointmentsList} = this.state
    return (
      <div className="bg-container1">
        <div className="bg-container2">
          <div className="bg-container3">
            <div className="add-appointments-container">
              <h1 className="">Add Appointments</h1>
              <form className="form-content" onSubmit={this.enterAppointment}>
                <label htmlFor="title" className="">
                  TITLE
                </label>
                <input
                  type="text"
                  placeholder="Title"
                  id="title"
                  onChange={this.getAppointmentTitle}
                />
                <label htmlFor="date" className="">
                  DATE
                </label>
                <input
                  type="date"
                  id="date"
                  onChange={this.getAppointmentDate}
                />
                <div>
                  <button
                    className="submit-button"
                    type="submit"
                    onClick={this.addAppointment}
                  >
                    Add
                  </button>
                </div>
              </form>
            </div>
            <img
              src="https://assets.ccbp.in/frontend/react-js/appointments-app/appointments-img.png"
              alt="appointments"
              className="appointment-img"
            />
          </div>
          <div>
            <div className="appointment-heading-stared">
              <p className="">Appointments</p>
              <button
                type="button"
                className=""
                onClick={this.getStaredAppointments}
              >
                Stared
              </button>
            </div>
            <ul className="appointments-list">
              {appointmentsList.map(each => (
                <AppointmentItem
                  key={each.id}
                  appointmentDetails={each}
                  toStarOrDeStarAppointment={this.toStarOrDeStarAppointment}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default Appointments