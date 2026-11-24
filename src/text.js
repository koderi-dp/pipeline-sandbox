export function slugify(s) {
  return String(s).toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
}

export function reverse(s) {
  return Array.from(String(s)).reverse().join('');
}

export function shout(s) {
  const str = String(s);
  return str === '' ? '' : str.toUpperCase() + '!';
}
