import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.yelp.com/v3/businesses',
  headers: {
    Authorization:
      'Bearer rH8aiIp-gTz2gJCUl3MpHersLMvkmAWU2LzVcOnGwjGUS2Z-COQeBLpWvCN3V6LOovAU9QLa1Qp83MViT9T76_PRZUg9oIg4IFbvDFLO53KwG8HpppAUFomAhSkOYHYx',
  },
});
