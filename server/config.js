module.exports = {
  /**
   * Your application `client_id` and `client_secret`.
   * Manage in your Spotify developer dashboard.
   */
  client_id: 'f68ca15ba8754e5894ec4d327a93b560',
  client_secret: '468809aade454dda9b81a68d1eb45a90',

  /**
   * Set your application's Redirect URI to the following:
   */
  redirect_uri: 'http://localhost:8001/callback',

  /**
   * Don't change these.
   */
  scope: 'user-read-playback-state',
  state_key: 'KALEIDOSYNC_AUTH_ID',
  access_token: 'KALEIDOSYNC_ACCESS_TOKEN',
  refresh_token: 'KALEIDOSYNC_REFRESH_TOKEN',
  refresh_code: 'KALEIDOSYNC_REFRESH_CODE'
}
