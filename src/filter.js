import products from './products';
import { renderListAndHeader } from './render';

export function searchInkeyUp(event) {
	const searched = event.target.value;

	const productsFound = productsFilterInSearch(searched);

	productsFound.length > 0
		? renderListAndHeader(productsFound)
		: (listContainer.innerHTML = 'Nenhum produto encontrado');
}

export function productsFilterInSearch(searched) {
	return products.filter((product) => {
		return product.title.toLowerCase().includes(searched.toLowerCase());
	});
}
