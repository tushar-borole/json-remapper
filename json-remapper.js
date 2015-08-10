var jsonmapper = {
    // get method here
    map: function (dest, source,callback) {


        var path = "";
        var destObject = jQuery.extend(true, {}, dest);




        function traverse(key, value) { //traverse to every elemet off array
            var savepath = path;

            path = path ? (path + "." + key) : key;



            // ...do what you like with `key` and `value`

            if (typeof value === "object") {
                // Recurse into children
                $.each(value, traverse);
            } else {
                //console.log(key)
                //pathArr.push(path)
                var jsonVal = _.get(source, value, null);
                _.set(destObject, path, jsonVal);

                //display("Visiting " + path);

            }

            path = savepath;
        }

        // Loop the top level
        $.each(destObject, traverse);
        //console.log(destObject)
        callback(destObject)




    }
};