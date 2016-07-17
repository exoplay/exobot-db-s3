# exobot-db-s3

## Installation

* `npm install --save @exoplay/exobot/exobot-db-s3`

## A Setup Example

```javascript
import Exobot from '@exoplay/exobot';
import { readS3, writeS3} from '@exoplay/exobot-db-s3';

const S3_REGION = process.env.S3_REGION;
const S3_ACCESS_KEY_ID = process.env.S3_ACCESS_KEY_ID;
const S3_SECRET_ACCESS_KEY = process.env.S3_SECRET_ACCESS_KEY;
const S3_BUCKET = process.env.S3_BUCKET;

const Bot = new Exobot(BOT_NAME, {
  // ...,
  readFile: readS3(S3_REGION, S3_ACCESS_KEY_ID, S3_SECRET_ACCESS_KEY, S3_BUCKET),
  writeFile: writeS3(S3_REGION, S3_ACCESS_KEY_ID, S3_SECRET_ACCESS_KEY, S3_BUCKET),
});
```

## Setup notes

Creating a bucket, access_key, and secret_access_key is an exercise in
frustration. Sorry.

You may also need to include "babel-polyfill" for generator support.

## License

MIT licensed. Copyright 2016 Exoplay, LLC. See LICENSE file for more details.
