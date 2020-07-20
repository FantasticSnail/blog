let api_url = '';

switch (process.env.NODE_ENV) {
    case 'development':
        api_url = '';
        break;
    case 'production':
        api_url = '';
        break;
}

export const BLOG_CONFIG = {
    API_URI: api_url
};
