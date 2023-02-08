const mongoose = require('mongoose');


const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is required"],
    },
    username: {
        type: String,
        required: [true, "Username is required"],
        minlength: 4,
    },
    email: {
        type: String,
        required: [true, 'Email address is required'],
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
    },
    address: [
        {
            street: {
                type: String,
                required: [true, "Street is required"],
            },
            suite: {
                type: String,
                required: [true, "Suite is required"],
            },
            city: {
                type: String,
                required: [true, "City is required"],
                match: [/^[a-zA-Z\s]+$/, "City must only be alphabetical and can have a space"]
            },
            zipcode: {
                type: String,
                required: [true, "Zipcode is required"],
                match: [/^\d{5}-\d{4}$/, "Zipcode must be in 12345-1234 Format"]
            },
            geo: [
                {
                    lat:{
                        type: String,
                        required: [true, "Lat is required"],
                    },
                    lng:{
                        type: String ,
                        required: [true, "Lng is required"],
                    },
                },
            ],
        },
    ],
    phone: {
        type: String,
        required: [true, "Phone is required"],
        match: [/^\d{1}-\d{3}-\d{3}-\d{4}$/, "Phone number must be in 1-123-123-1234 format"]
    },
    website: {
        type: String,
        required: [true, "Website is required"],
        match: [/^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([-.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/, "Website muse be a proper URL"]
    },
    company: [{
            name: {
                type: String,
                required: [true, "Name is required"],
            },
            catchPhrase: {
                type: String,
                required: [true, "Catch Phrase is required"],
            },
            bs: {
                type: String,
                required: [true, "BS is required"],
            },
        },
    ],
});


UserSchema.post('init', (doc) => {
    console.log('%s has been initialized to the db', doc._id);
});

UserSchema.post('validate', (doc) => {
    console.log('%s has been validated (but not saved yet)', doc._id);
});


UserSchema.post('save', (doc) => {
    console.log('%s has been saved', doc._id);
})


const User = mongoose.model("User", UserSchema);
module.exports = User;