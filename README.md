# Simple Mock Api Data Server

Just a simple mock api server that serves static JSON files from a folder structure using ExpressJS.

# Here's how it works:

1. Grab a json API response from a live API and save it as a file.
An easy way to do this is in Chrome via the Network tab in the Dev Tools.
Right click on the response and choose `Copy as cURL`.
Paste in the terminal and append with `> somejsonfile.json` to save it to a json file.

2. In the `/test/mocks/api` folder create a folder structure to mimic a path you want to make a GET or POST request to, ie. if your making calls to an api with endpoint `/v2/instance/test_instance/stats_config` create the folder structure `v2/instance/test_instance/`inside `/test/mocks/api`.

3. Name the json file to match the api name, ie. for `stats_config` you would name it `stats_config.json`.

4. Put the json file in the directory, ie. following the examples `/test/mocks/api/v2/instance/test_instance/stats_config.json`.

5. *No Server Restart Necessary*

You should now be able to make GET or POST calls to your mock data file.

# Server info

It runs as a [forever-service](https://github.com/zapty/forever-service) called `mock-data`.

Commands to interact with service mock-data:

```
Start   - `sudo service mock-data start`
Stop    - `sudo service mock-data stop`
Status  - `sudo service mock-data status`
Restart - `sudo service mock-data restart`
```
# Questions?  Need Help?

Contact @jewelsjacobs

# Credit Where Credit Is Due

Totally ripped off from [Adam Boczek's blog](https://coderwall.com/p/ss80vw) with some tweaks to use the latest version of ExpressJS.

Thank you Adam Boczek.

If you use this, show him some love by sharing his [blog article](http://twitter.com/share?url=https%3A%2F%2Fcoderwall.com%2Fp%2Fss80vw&via=coderwall&text=Using+Node.js+with+Express+as+a+Simple+API+Mock+Server+%23protip&related=&count=vertical&lang=en)

[![Support via Gratipay](https://cdn.rawgit.com/gratipay/gratipay-badge/2.3.0/dist/gratipay.png)](https://gratipay.com/jewelsjacobs/)
