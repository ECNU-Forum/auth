import app from 'flarum/admin/app';

app.initializers.add('ecnu-im/auth', () => {
  console.log('[ecnu-im/auth] Hello, admin!');
});
