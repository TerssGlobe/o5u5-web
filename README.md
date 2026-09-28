# OPG O5U5 — web (Astro)


```bash
npm install
npm run dev      # lokalni razvoj → http://localhost:4321
npm run build    # produkcijski build → dist/
npm run preview  # pregled builda
```

## Struktura

```
src/
  layouts/Layout.astro      # <head>, fontovi, meta
  components/               # sekcije one-pagera
    Header, Hero, About, Products, Features, Reviews, Contact, Footer, Logo
  styles/global.css         # DIZAJN SUSTAV (tokeni) — tema se mijenja ovdje
public/
  favicon.svg
```

## Tema / brendiranje

Sve boje, fontovi i radijusi su CSS varijable u `src/styles/global.css` (`:root`).
