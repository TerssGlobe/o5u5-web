// Idempotentni seed za Firestore — Faza 3.
// Pokrenuti JEDNOM. Piše samo ako 'siteContent/home' ne postoji,
// pa uzastopno pokretanje NE prebrisuje izmjene iz admina.
import { readFileSync } from 'node:fs';
import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';

const content = JSON.parse(readFileSync(new URL('./content.json', import.meta.url)));
const svc = JSON.parse(readFileSync(new URL('./serviceAccount.json', import.meta.url)));

initializeApp({ credential: cert(svc) });
const db = getFirestore();
const ref = db.collection('siteContent').doc('home');

const snap = await ref.get();
if (snap.exists) {
  console.log('Preskačem: siteContent/home već postoji (ne prebrisujem admin izmjene).');
} else {
  await ref.set(content);
  console.log('Seed upisan u siteContent/home.');
}
process.exit(0);
