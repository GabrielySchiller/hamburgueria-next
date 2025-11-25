
import React from 'react';
import DetalhesHamburguer from './detalhesHamburguer';
import { hamburguers } from '@/data/array-hamburguers';

export default async function Page({ params }) {
  const { id } = await params; 
  const hamburguer = hamburguers.find(h => String(h.id) === String(id));

  if (!hamburguer) {
    return (
      <main>
        <p className="text-center text-gray-500 mt-10">Hambúrguer não encontrado 😢</p>
      </main>
    );
  }

  return (
    <main>
      <DetalhesHamburguer item={hamburguer} />
    </main>
  );
}
