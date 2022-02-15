<script>
	import {onMount} from "svelte"

	export let api;
	let count = 0
	let data = [[]]
	let total = 0

	onMount(()=>{loadData()})

	const loadData = async ()=>{
		
		await fetch(`${api}/${count}`)
		.then(res=>res.json())
		.then(res => {
			data = [res.datum]
			total = res.count
			console.log(data[0]);
		})
	}

	const openWindow = (url)=>{
		var win = window.open();
win.document.write(`<iframe width="560" height="315" src="${url}" frameborder="0" allowfullscreen></iframe>`)
	}



	

	
</script>

<main>

<div class="container">
	<label for="basic-url">result strating from {count} of {total}</label>
<div class="input-group mb-3">
  <div class="input-group-prepend">
    <span class="input-group-text" id="basic-addon3">Data  Start Point</span>
  </div>
  <input type="number" 
		bind:value={count} 
		class="form-control" 
		id="basic-url" 
		aria-describedby="basic-addon3">
		<button on:click={()=>{loadData()}}>Load</button>
</div>
</div>

	{#if data[0].length != 0}
	<table class="table">
		<thead>
			<tr>
			  <th scope="col">#</th>
			  <th scope="col">Name</th>
			  <th scope="col">Mobile</th>
			  <th scope="col">Whatsapp</th>
			</tr>
		  </thead>
		  <tbody>
		{#each data[0] as info, index }
	
			  <tr>
				<th scope="row">{index}</th>
				<td on:click={()=>openWindow(info.whatsapp)}> {info.name}</td>
				<td>{info.mobile}</td>
				<td>
					<a href={info.whatsapp}>
						<img width="20px" height="20px" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/2042px-WhatsApp.svg.png" alt="">
					</a>
				</td>
			  </tr>
			  <tr>
		
		 
		{/each}
	</tbody>
	</table>
	{/if}
</main>

<!-- http://127.0.0.1:3510/data/ -->


<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
		-webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
     -khtml-user-select: none; /* Konqueror HTML */
       -moz-user-select: none; /* Old versions of Firefox */
        -ms-user-select: none; /* Internet Explorer/Edge */
            user-select: none; /* Non-prefixed version, currently
                                  supported by Chrome, Edge, Opera and Firefox */
	}



	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>