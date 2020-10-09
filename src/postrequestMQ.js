import React, { Component } from 'react';
import axios from 'axios';
import Button from '@material-ui/core/Button';
import axiosRetry from 'axios-retry';

const retryDelay = (retryNumber = 0) => {
  const seconds = Math.pow(2, retryNumber) * 1000;
  const randomMs = 1000 * Math.random();
  return seconds + randomMs;
};

const api = axios.create({
  baseURL: `https://us-central1-cdap-2.cloudfunctions.net/sendmsqabk`,
});

axiosRetry(api, {
  retries: 5,
  retryDelay,
  retryCondition: axiosRetry.isRetryableError,
});
export default class createContent extends Component {
  createPayload = async () => {
    let res = await api.post('/', {
      key: 'TechKraft.',
    });
    console.log(res);
  };

  render() {
    return (
      <div>
        <Button
          variant="contained"
          color="secondary"
          onClick={this.createPayload}
        >
          Order Me
        </Button>
      </div>
    );
  }
}
