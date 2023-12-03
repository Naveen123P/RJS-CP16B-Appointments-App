// Write your code here
import './index.css'

const AppointmentItem = props => {
  const {appointmentDetails, toStarOrDeStarAppointment} = props
  const {id, title, date, isStared} = appointmentDetails

  const starAppointment = () => {
    toStarOrDeStarAppointment(id)
  }

  const isStarColored = isStared
    ? 'https://assets.ccbp.in/frontend/react-js/appointments-app/filled-star-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/appointments-app/star-img.png'

  return (
    <li className="appointment-item">
      <div className="title-star-container">
        <p>{title}</p>
        <button
          data-testid="star"
          type="button"
          onClick={starAppointment}
          className="star-button"
        >
          <img src={isStarColored} alt="star" className="star-img" />
        </button>
      </div>
      <p className="date-tag">{date}</p>
    </li>
  )
}

export default AppointmentItem
