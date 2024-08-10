import { Highlight } from 'react-instantsearch';

export const Hit = ({ hit }) => {
	return (
		<article>
			<img src={hit.image} />
			<div className="hit-name">
				<Highlight
					attribute="name"
					hit={hit}
				/>
			</div>
			<div className="hit-description">
				<Highlight
					attribute="description"
					hit={hit}
				/>
			</div>
			<div className="hit-price">
				<Highlight
					attribute="price"
					hit={hit}
				/>
			</div>
		</article>
	);
};
