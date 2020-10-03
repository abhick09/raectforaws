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
  baseURL: `https://lealnxhvw4.execute-api.us-east-1.amazonaws.com/v1/sqs`,
});

axiosRetry(api, {
  retries: 5,
  retryDelay,
  retryCondition: axiosRetry.isRetryableError,
});
export default class createContent extends Component {
  createPayload = async () => {
    let res = await api.post('/', {
      name: 'TechKraft.',
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
