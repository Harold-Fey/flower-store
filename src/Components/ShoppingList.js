import { plantList } from '../datas/plantList'
import '../styles/ShoppingList.css'
import PlantItem from './PlantItem'


function ShoppingList(){
	// reduce() browse through an array, apply a function on this iteration of "plant" and register the results in accumulator to be used again in the next iteration.
    const categories = plantList.reduce(
		(accumulator, plant) =>
			accumulator.includes(plant.category) ? accumulator : accumulator.concat(plant.category),
		[]
		//includes() check if an array contain a certain data.
	)
	//map()apply a function to each element of an array and return an array with the transformed datas.
    return (
        <div>
			<ul>
				{categories.map((cat) => (
					<li key={cat}>{cat}</li>
				))}
			</ul>
			<ul className='fs-plant-list'>
				{plantList.map(({id,cover, namez, water, light}) =>(
					<PlantItem
						id = {id}
						cover = {cover}
						namez = {namez}
						water = {water}
						light = {light}
					/>
				))}
			</ul>
		</div>
    )
}

export default ShoppingList