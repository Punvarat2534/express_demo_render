﻿const fs = require('fs');
const pg = require('pg');
const url = require('url');

const config = {
    user: "avnadmin",
    password: "AVNS_Hixl4QGVux30Kz0mZrI",
    host: "pg-3e37dcf6-punvarat-7a2d.f.aivencloud.com",
    port: 22067,
    database: "nabdb",
    ssl: {
        rejectUnauthorized: true,
        ca: `-----BEGIN CERTIFICATE-----
MIIETTCCArWgAwIBAgIURLAVF9CYXR5vd3spD8jyn4QNBZMwDQYJKoZIhvcNAQEM
BQAwQDE+MDwGA1UEAww1YTNkZTQwYWMtNjk4MS00YWEwLWI1MTAtNTY2MzQ4NTFh
M2M2IEdFTiAxIFByb2plY3QgQ0EwHhcNMjUwMjA2MDY0NzA2WhcNMzUwMjA0MDY0
NzA2WjBAMT4wPAYDVQQDDDVhM2RlNDBhYy02OTgxLTRhYTAtYjUxMC01NjYzNDg1
MWEzYzYgR0VOIDEgUHJvamVjdCBDQTCCAaIwDQYJKoZIhvcNAQEBBQADggGPADCC
AYoCggGBAL2TYM8Qeym+zSBhTYvWwuCZKq+c39IoqTMPW9XNrb4i6wUBhsNzMCdx
KOQq7PU/MYU1OFDOVmOvyUloh8S5njK5jIuxHBw5vDd9b8rwsPtnorPbR6gAljNq
p0LZSCLwpCo6Q4ln8UU30TY+OmKn2Vi5jlYkhNsT+MQyf9kw0MCw7gKWbCkXxOsJ
j3jL4FlGk3cWZ4IJPTnCUZycyVOhGsYvyEMTWOrukfKC5FUjTVMVgUdSyY870jUb
Ul+lb+uhLB6o19fm2JJvXQ/wmruCR/c5f+pWwH/LExqwZSYTrhG606dKH5KQv463
No2SyRc+mvF5vu6oE89en6gH4g1CVuNVZU9PnhoWfA1iOQjNX5NeEWH9nKj4bbLg
8exJl5kar4gc7PW1gE7ccctj2JweW/nb1KbFF2s7A8IJT/RX49icEzAkUTbjWHpu
QzZKhdoPmN7b7QC/eTqDuOFK6epHuCrWPROnc79OKGKXS9ODWibGysBgGIZTPNlY
jeV+RoTCWwIDAQABoz8wPTAdBgNVHQ4EFgQU4L6Qn2l35hRJ9HT+My82y6v2EuQw
DwYDVR0TBAgwBgEB/wIBADALBgNVHQ8EBAMCAQYwDQYJKoZIhvcNAQEMBQADggGB
ADuxWRh3MW99db6fy4dbNjslDBS/X97QxywcIEp0dGnkcHLqVhMeYi39WL+uNZzo
g2gGZz3uc3X+ayKwFZXKLs/aUDm9N9vHzMlmr4bjycdSIknmRypY4yKi5P6iPXjG
OqIC5OI88Bix7R2getJOnI51FqAn/vcsB6TQZ4p2SU5Kg3PDOu6gXcisQLo9CmbJ
3x5CjKBv5hLmsizsQS3FjrRraU+MuwjxVweUrekJIGF5wWZiDqNCGVgDi9IgLv9S
XFA4hjesV4DuUNBqJgVy2XGq0DbaeUGxl0fW3Q1xMBWA3N6ByTf8rQrwMW1uv1oa
3I2L97dVs3rrKQPoWaVFh1wXDY/F1jH6b2G1nYGR9laMgJPudrz4IrmJ3iozm0Y/
fRQwn9xfwABPRiNt3hkGhUeVIvNxfseGbWJcBT01kFgmPM+bqq1dHHhIuhz9n274
3lks4sQslFDARffA4OG1qug9E523OppCCioHfXSYvsc4A+hSOU3eYLHOWKblc4l2
Kw==
-----END CERTIFICATE-----`,
    },
};

const client = new pg.Client(config);
client.connect(function (err) {
    if (err)
        throw err;
    client.query("SELECT VERSION()", [], function (err, result) {
        if (err)
            throw err;

        console.log(result.rows[0].version);
        client.end(function (err) {
            if (err)
                throw err;
        });
    });
});