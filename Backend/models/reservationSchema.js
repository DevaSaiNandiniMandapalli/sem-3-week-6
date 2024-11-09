import mongoose from 'mongoose';
import isEmail from 'validator/lib/isEmail.js';

const reservationSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        minLength: [3, "First Name must contain at least 3 characters"],
        maxLength: [30, "First Name cannot exceed 30 characters"],
    },
    lastName: {
        type: String,
        required: true,
        minLength: [3, "Last Name must contain at least 3 characters"],
        maxLength: [30, "Last Name cannot exceed 30 characters"],
    },
    email: {
        type: String,
        required: true,
        validate: {
            validator: isEmail,
            message: "Please provide a valid email address",
        },
    },
    phone: {
        type: String,
        required: true,
        validate: {
            validator: function (value) {
                return /^\d{10}$/.test(value); 
            },
            message: "Phone number must contain exactly 10 digits",
        },
    },
    time: {
        type: String,
        required: true,
    },
    date: {
        type: String,
        required: true,
    },
});

export const Reservation = mongoose.model("Reservation", reservationSchema);
