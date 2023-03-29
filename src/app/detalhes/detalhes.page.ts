import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-detalhes',
  templateUrl: './detalhes.page.html',
  styleUrls: ['./detalhes.page.scss'],
})
export class DetalhesPage implements OnInit {
  
  produto: any;
  quantidade = 1;
  valor: number = 0;
  
  constructor(private route: ActivatedRoute) {
    const produtoJson = this.route.snapshot.paramMap.get('produto');
    if (produtoJson !== null) {
      this.produto = JSON.parse(produtoJson);
      this.valor = this.produto.valor
    } else {
      console.error('O parâmetro produto não foi encontrado na rota');
    }
  }


  formatacao(valor : any) {
    return valor.toFixed(2).toString().replace(".", ",");
  }
  
  adicionar() {
    this.quantidade += 1;
    this.valor += this.produto.valor;
  }

  remover() {
    if (this.quantidade > 1) {
      this.quantidade -= 1;
      this.valor -= this.produto.valor;
    }
  }

  ngOnInit() {
  }

}
