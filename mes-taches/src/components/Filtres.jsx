const OPTIONS = [
  { valeur: 'toutes', libelle: 'Toutes' },
  { valeur: 'actives', libelle: 'À faire' },
  { valeur: 'terminees', libelle: 'Terminées' },
]

function Filtres({ filtre, onChanger }) {
  return (
    <div className="ligne">
      {OPTIONS.map((opt) => (
        <button
          key={opt.valeur}
          className={filtre === opt.valeur ? 'actif' : ''}
          onClick={() => onChanger(opt.valeur)}
        >
          {opt.libelle}
        </button>
      ))}
    </div>
  )
}

export default Filtres
