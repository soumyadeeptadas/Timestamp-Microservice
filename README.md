# API Project: Timestamp Microservice

App Link
- https://timestamp-microservice-sd.glitch.me

### Overview:

1. This microservice produces the UTC as well as unix date when the endpoint is satisfied.
2. The API endpoint is `https://timestamp-microservice-sd.glitch.me/api/timestamp/:date_string?`
3. Returns current UTC and unix date if no `date_string` is passed.
4. If the date string is `valid` the api returns a JSON, having the structure:
   e.g. `{"unix": 1479663089000 ,"utc": "Sun, 20 Nov 2016 17:31:29 GMT"}`
5. If the date string is `invalid` the api returns a JSON having the structure
   `{"error" : "Invalid Date" }`

#### Example usage:

- https://timestamp-microservice-sd.glitch.me/api/timestamp/2020-05-29
- https://timestamp-microservice-sd.glitch.me/api/timestamp/1590769211006

#### Example output:

- `{"unix":1590769211006,"utc":"Fri, 29 May 2020 16:20:11 GMT"}`
