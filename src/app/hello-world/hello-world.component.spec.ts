import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HelloWorldComponent } from './hello-world.component';

describe('HelloWorldComponent', () => {
  let component: HelloWorldComponent;
  let fixture: ComponentFixture<HelloWorldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HelloWorldComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HelloWorldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();    
  });

  it('Verify if have class Hello-World', () => {
    const fixture = TestBed.createComponent(HelloWorldComponent);
    const compiled = fixture.debugElement.nativeElement;    
    expect(compiled.querySelector('div')).toHaveClass('hello-world');
  });

  it('Verify if we have a Subtitle in h2', () => {
    const fixture = TestBed.createComponent(HelloWorldComponent);
    const compiled = fixture.debugElement.nativeElement;    
    expect(compiled.querySelector('h2').textContent).toContain('Subtitle');
  }); 
  
});
