module.exports.ReE = function (res, err, code) {
    // Error Web Response
    if (typeof err == 'object' && typeof err.message != 'undefined') {
        err = err.message;
    }

    if (typeof code !== 'undefined') res.statusCode = code;

    return res.json({ success: false, message: err });
};

module.exports.ReS = function (res, data, code) { // Success Web Response
    let send_data = { success: true };

    if (typeof data == 'object') {
        send_data = Object.assign(data, send_data);//merge the objects
    }

    if (typeof code !== 'undefined') res.statusCode = code;

    return res.json(send_data)
};

module.exports.TE = TE = function (err_message, log) {
    // TE stands for Throw Error
    if (log === true) {
        console.error(err_message.message);
    }

    throw new Error(err_message);
};