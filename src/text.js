export function slugify(s) {
  return String(s).toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
}

export function capitalize(s) {
  s = String(s);
  return s.charAt(0).toUpperCase() + s.slice(1);
}
