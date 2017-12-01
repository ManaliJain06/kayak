/**
 * Created by ManaliJain on 11/29/17.
 */
import React,{Component} from 'react';
const moment = require('moment');

class FlightBooking extends Component{

    render(){
        let flightsData = this.props.flightData;
        let flightSelected = this.props.flightSelected;
        const startDate = moment(flightsData.searchParams.startDate, 'MM/DD/YYYY');
        const endDate = moment(flightsData.searchParams.endDate, 'MM/DD/YYYY');
        const daysBooked = endDate.diff(startDate, 'days');
        let price = flightSelected.price * daysBooked;

        return(
            <div>
                <div className = "col-sm-offset-1 col-sm-4">
                    <h4 className = "labelHeadings"> Your Booking Details </h4>
                    <br/>
                    {/*<div className="form-group row">*/}
                        {/*<label className="col-sm-4 col-form-label labelColorBooking">Source :</label>*/}
                        {/*<div className="col-sm-6">*/}
                            {/*<label className="col-form-label labelColorBooking">{carsData.searchParams.location}</label>*/}
                        {/*</div>*/}
                    {/*</div>*/}
                    {/*<div className="form-group row">*/}
                        {/*<label className="col-sm-4 col-form-label labelColorBooking">Destination :</label>*/}
                        {/*<div className="col-sm-6">*/}
                            {/*<label className="col-form-label labelColorBooking">{carsData.searchParams.startDate}</label>*/}
                        {/*</div>*/}
                    {/*</div>*/}
                    {/*<div className="form-group row">*/}
                        {/*<label className="col-sm-4 col-form-label labelColorBooking">Departure :</label>*/}
                        {/*<div className="col-sm-6">*/}
                            {/*<label className="col-form-label labelColorBooking">{carsData.searchParams.endDate}</label>*/}
                        {/*</div>*/}
                    {/*</div>*/}
                    {/*<div className="form-group row">*/}
                        {/*<label className="col-sm-4 col-form-label labelColorBooking">Passengers :</label>*/}
                        {/*<div className="col-sm-6">*/}
                            {/*<label className="col-form-label labelColorBooking">{carSelected.capacity}</label>*/}
                        {/*</div>*/}
                    {/*</div>*/}
                    {/*<div className="form-group row">*/}
                        {/*<label className="col-sm-4 col-form-label labelColorBooking">Class :</label>*/}
                        {/*<div className="col-sm-6">*/}
                            {/*<label className="col-form-label labelColorBooking">*/}
                                {/*<p className="booking-item-car-title">{carSelected.dealer.address}</p>*/}
                                {/*<p className="booking-item-car-title">{carSelected.dealer.city}</p>*/}
                                {/*<p className="booking-item-car-title">{carSelected.dealer.state}</p>*/}
                                {/*<p className="booking-item-car-title">{carSelected.dealer.country}</p>*/}
                                {/*<p className="booking-item-car-title">{carSelected.dealer.zipcode}</p>*/}
                            {/*</label>*/}
                        {/*</div>*/}
                    {/*</div>*/}
                    {/*<div className="form-group row">*/}
                        {/*<label className="col-sm-4 col-form-label labelColorBooking">Airline :</label>*/}
                        {/*<div className="col-sm-6">*/}
                            {/*<label className="col-form-label labelColorBooking">{carSelected.type}</label>*/}
                        {/*</div>*/}
                    {/*</div>*/}
                    {/*<div className="form-group row">*/}
                        {/*<label className="col-sm-4 col-form-label labelColorBooking">Price :</label>*/}
                        {/*<div className="col-sm-6">*/}
                            {/*<label className="col-form-label labelColorBooking">{carSelected.make}</label>*/}
                        {/*</div>*/}
                    {/*</div>*/}
                    {/*<div className="form-group row">*/}
                        {/*<label className="col-sm-4 col-form-label labelColorBooking">Model :</label>*/}
                        {/*<div className="col-sm-6">*/}
                            {/*<label className="col-form-label labelColorBooking">{carSelected.model}</label>*/}
                        {/*</div>*/}
                    {/*</div>*/}
                    {/*<div className="form-group row">*/}
                        {/*<label className="col-sm-4 col-form-label labelColorBooking">Price :</label>*/}
                        {/*<div className="col-sm-6">*/}
                            {/*<label className="col-form-label labelColorBooking">${price}</label>*/}
                        {/*</div>*/}
                    {/*</div>*/}

                </div>
            </div>
        )
    }
}

export default FlightBooking;
