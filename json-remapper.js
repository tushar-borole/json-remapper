var jsonmapper = {
    // get method here
    map: function (dest, source) {


        var path = "";


       

        function traverse(key, value) {//traverse to every elemet off array
            var savepath = path;

            path = path ? (path + "." + key) : key;



            // ...do what you like with `key` and `value`

            if (typeof value === "object") {
                // Recurse into children
                $.each(value, traverse);
            } else {
                console.log(path)
                //pathArr.push(path)
                    //console.log(_.get(obj1, 'a[0].b.c', 4));
                    //_.set(object, 'a[0].b.c', 4);
                //display("Visiting " + path);

            }

            path = savepath;
        }
        
         // Loop the top level
        $.each(dest, traverse);




    }
};