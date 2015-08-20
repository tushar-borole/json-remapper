var jsonmapper = {
    // get method here
    map: function (dest, source, callback) {


        var path = "";
        var destObject = _.clone(dest, true);




        function traverse(value, key) { //traverse to every elemet off array
            var savepath = path;
            //console.log(value)
            path = path ? (path + "." + key) : key;



            if (typeof value === "object") {
                // Recurse into children
                _.forEach(value, traverse);
            } else {

                var jsonVal = _.get(source, value, null);
                _.set(destObject, path, jsonVal);



            }

            path = savepath;
        }

        // Loop the top level
        _.forEach(destObject, traverse);
        //console.log(destObject)

        if (_.isFunction(callback)) {
            callback(destObject)
        }else{
        return destObject
        }





    }
};