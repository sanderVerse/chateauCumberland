import React from "react";


const Reservation: React.FC = () => {
    return(
        <div>
            <h1>Reservation</h1>
            <p>Reservation pour evenement</p>

            <form /*onSubmit={sendEmail}*/>
                <label>Name:</label>
                <input type="text" name="client_nom" required/>
                
                <label>Email:</label>
                <input type="text" name="client_email" required/>

                <label>Date:</label>
                <input type="date" name="reservation_date" required/>

                <label>Item</label>
            </form>
        </div>
    );
};
export default Reservation;