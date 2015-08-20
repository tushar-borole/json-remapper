json-remapper
===================


As a frontend developer i use to always fight with backend developer to give json in the specific format. So i decided to create the json remapper, which crete the json from another json ie map json from another json very easily. Check out the documentation for the futher use.

**Note** :- This Library is based on lodash, so you need to include lodash js before using this library. Download the library from [lodash](www.lodash.com)

----------


Getting Started
-------------

.

####  **bower install**

    bower install json-remapper

####  **npm install**

    npm install json-remapper




####  **Usage**

          var source = {
                "name": "Tushar",
                "key1":{"name1": "Satish"}
            }
            var dest = {
                obj1: {
                    key1: 'key1.name1',
                    key2: 'name'
                }
            };

            jsonmapper.map(dest, source, function (obj) {
                console.log(obj)

            })
            or
            var obj=jsonmapper.map(dest, source)
            //output
            {
                obj1: {
                    key1: 'Satish',
                    key2: 'Tushar'
                }
            };



  


----------

## Contributing

Open an issue first to discuss potential changes/additions. If you have questions with the guide, feel free to leave them as issues in the repository. If you find a typo, create a pull request. The idea is to keep the content up to date and use github’s native feature to help tell the story with issues and PR’s, which are all searchable via google. Why? Because odds are if you have a question, someone else does too! You can learn more here at about how to contribute.

*By contributing to this repository you are agreeing to make your content available subject to the license of this repository.*

### Process
    1. Discuss the changes in a GitHub issue.
    2. Open a Pull Request, reference the issue, and explain the change and why it adds value.
    3. The Pull Request will be evaluated and either merged or declined.

## License

 Use this guide. Attributions are appreciated._

### Copyright

Copyright (c) 2014-2015 [Tushar Borole](http://www.tusharborole.com)

### (The MIT License)
Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
'Software'), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
