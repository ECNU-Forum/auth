import app from 'flarum/common/app';

app.initializers.add('ecnu-im/auth', () => {
  console.log('[ecnu-im/auth] Hello, forum and admin!');
});
