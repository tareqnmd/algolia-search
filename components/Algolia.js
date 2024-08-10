'use client';

import algoliasearch from 'algoliasearch/lite';
import 'instantsearch.css/themes/satellite.css';
import { Configure, Hits, InstantSearch, SearchBox } from 'react-instantsearch';

import { Hit } from './Hit';

const searchClient = algoliasearch(
	'4YBSHHOPLO',
	'7d080e9bf2e350c0776acd821dce5407'
);

export const AlgoliaSearch = () => {
	return (
		<InstantSearch
			searchClient={searchClient}
			indexName="data"
		>
			<Configure hitsPerPage={5} />
			<div className="ais-InstantSearch">
				<SearchBox />
				<Hits hitComponent={Hit} />
			</div>
		</InstantSearch>
	);
};
