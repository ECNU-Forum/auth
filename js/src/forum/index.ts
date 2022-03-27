import app from 'flarum/forum/app';

app.initializers.add('ecnu-im/auth', () => {
  console.log('[ecnu-im/auth] Hello, forum!');
});
