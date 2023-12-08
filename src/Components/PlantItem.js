import CareScale from './CareScale'
import '../styles/PlantItem.css'

function handleClick(e){
	console.log(`This is my event : `, e);
}
function PlantItem({ id, cover, namez, water, light }) {
	return (
		<li key={id} className='fs-plant-item' onClick={() => handleClick(namez)}>
			<img className='fs-plant-item-cover' src={cover} alt={`${namez} cover`} />
			{namez}
			<div>
				<CareScale careType='water' scaleValue={water} />
				<CareScale careType='light' scaleValue={light} />
			</div>
		</li>
	)
}

export default PlantItem