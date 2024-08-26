import { Input } from "../components/Input";

export function Form () {
    return(
        <form className="flex flex-col">
        <fieldset className="border border-gray-300 p-4 mb-5 rounded-lg ">
          <legend className="font-bold mb-2.5 text-gray-700">Informations Personnelles:</legend>
          <label htmlFor="nom" className="mb-1.5 block text-gray-800">Nom:</label>
          <Input id="nom" />

          <label htmlFor="prenom" className="mb-1.5 block text-gray-800">Prenom:</label>
          <Input id="prenom" />

          <label htmlFor="âge" className="mb-1.5 block text-gray-800">Age:</label>
          <Input id="âge" />

          <label htmlFor="date" className="mb-1.5 block text-gray-800">Date de naissance:</label>
          <input type="date"></input>

          <label className="mb-1.5 block text-gray-800">Sexe :</label>
            <select>
                <option disabled selected>Veuillez choisir...</option>
                <option>Homme</option>
                <option>Femme</option>
            </select>

          <label htmlFor="e_mail" className="mb-1.5 block text-gray-800">Email:</label>
          <Input id="e_mail" />

          <label htmlFor="phone" className="mb-1.5 block text-gray-800">Téléphone :</label>
          <Input id="phone" />
        </fieldset>

        <fieldset className="border border-gray-300 p-4 mb-5 rounded-lg ">
        <legend className="font-bold mb-2.5 text-gray-700">Réponse Oui/Non</legend>
        <label className="mb-1.5 block text-gray-800">Acceptez-vous de continuer ?</label>
        <input type="radio"value="oui" className="mr-1.25"></input>
        <label className="mb-1.5 block text-gray-800">Oui</label>
        <input type="radio"value="non" className="mr-1.25"></input>
        <label className="mb-1.5 block text-gray-800">non</label>
        </fieldset>

        <fieldset className="border border-gray-300 p-4 mb-5 rounded-lg">
        <legend className="font-bold mb-2.5 text-gray-700">Choisissez un Référentiel:</legend>
        <label className="mb-1.5 block text-gray-800">Référentiel :</label>
            <select>
                <option disabled selected>Veuillez choisir...</option>
                <option>Developpeur web</option>
                <option>Référent digital</option>
            </select>
        </fieldset>

        <fieldset className="border border-gray-300 p-4 mb-5 rounded-lg">
        <legend className="font-bold mb-2.5 text-gray-700">Vous postulez pour quelle Campus:</legend>
        <label className="mb-1.5 block text-gray-800">Campus :</label>
            <select>
                <option disabled selected>Veuillez choisir...</option>
                <option>Libreviile</option>
                <option>Port-gentil</option>
            </select>
        </fieldset>
        <button type="submit" className="bg-red-500 text-white border-none py-2 px-4 rounded cursor-pointer text-base hover:bg-red-600">Envoyer</button>
      </form>
    );
}