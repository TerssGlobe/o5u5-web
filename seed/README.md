# Seed — sadržaj sajta

`content.json` je **izvor istine** za tekst sajta i **spreman seed za Firestore** (Faza 3).

## Faza 1 (sada, bez admina)
Sadržaj živi u komponentama (`src/components/*`). `content.json` je pripremljen
i drži isti tekst — služi kao referenca i budući seed. **Deploy ne dira ništa**,
statični tekst se prikazuje na svakom buildu (nemoguće ga "pobrisati").

## Faza 3 (admin + Firestore)
1. Učitaj `content.json` u Firestore JEDNOM: kolekcija `siteContent`, dokument `home`.
2. Od tada je Firestore izvor istine; admin piše, build/runtime samo čita.
3. **Seed se NE pokreće na svaki deploy** — inače bi prebrisao izmjene iz admina.
   Skripta je idempotentna: piše samo ako dokument ne postoji.

## Pokretanje seeda (Faza 3)
```bash
npm i firebase-admin
# stavi service account ključ u seed/serviceAccount.json (NE commitati!)
node seed/seed.mjs
```
