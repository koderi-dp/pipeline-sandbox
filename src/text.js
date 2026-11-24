export function slugify(s) {
  return String(s).toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
}

export function reverse(s) {
  return Array.from(String(s)).reverse().join('');
}

export function capitalize(s) {
  const str = String(s);
  return str.charAt(0).toUpperCase() + str.slice(1);
}
