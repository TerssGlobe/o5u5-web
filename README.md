# OPG O5U5 — web (Astro)

One-pager za OPG O5U5 (Vrbovec) — Faza 1 iz brief-a. Gradiv temelj koji kasnije
raste u više stranica i webshop.

## Pokretanje

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
Za drugog klijenta kopira se projekt i mijenjaju se samo te vrijednosti — to je
ponovno upotrebljiv temelj.

## TODO (prije launcha)

- Zamijeniti privremeni amblem (`Logo.astro`, `favicon.svg`) službenim logom (SVG).
- Ubaciti prave fotografije (hero, o nama) — `astro:assets` `<Image />` za optimizaciju.
- Potvrditi cijene i proizvode s vlasnikom.
- Prave recenzije kupaca umjesto reprezentativnih.
- Domena + deploy (Firebase Hosting / Cloudflare Pages).
