import Svg, {Circle, Path} from 'react-native-svg';
import React from 'react';
import {View, StyleSheet} from 'react-native';

import Colors from '../../../constants/Colors';

import {VerbProps} from './index';

const paths = [
  'M551 490C549 475 548 461 546 446C545 428 542 409 541 391C540 375 538 360 536 345C536 340 535 335 535 330C534 324 530 326 527 326C523 325 522 327 521 330C516 386 518 441 518 496C518 501 518 507 520 512C521 518 520 521 515 521C505 523 496 528 485 528C482 528 477 528 477 525C476 521 480 519 483 518C487 517 490 516 494 514C502 511 506 507 506 498C506 488 506 478 505 469C503 460 503 451 503 442C502 419 500 395 500 371C499 355 500 339 498 324C497 317 495 311 493 304C493 302 493 300 492 298C488 306 487 315 484 323C483 325 484 327 484 329C486 336 488 342 485 349C484 352 485 355 486 357C487 359 488 360 488 361C490 364 490 366 488 368C487 371 485 368 483 369C482 371 484 374 480 375C477 375 475 373 473 370C467 360 466 349 468 337C474 311 478 285 484 259C486 253 486 247 487 242C487 238 485 236 481 235C482 222 486 210 488 197C490 186 492 186 503 184C510 182 516 179 523 175C526 174 525 170 525 167C524 164 522 165 520 165C508 163 501 155 495 146C483 125 478 102 477 77C476 66 477 55 479 44C480 35 485 27 493 22C505 15 517 8 532 9C549 10 563 16 573 31C577 36 579 42 579 48C581 60 583 73 581 85C582 86 583 86 584 85C592 84 596 88 594 96C593 103 591 110 587 116C584 123 579 129 570 126C568 126 567 127 566 128C560 138 551 147 543 156C542 157 542 158 541 160C541 165 547 174 552 176C558 179 565 181 571 184C574 185 576 186 577 189C582 200 587 212 592 223C593 226 593 228 590 230C588 231 588 233 589 235C597 254 594 274 594 294C594 303 595 311 594 319C593 322 595 326 596 329C597 332 597 334 598 336C604 348 597 356 589 364C586 367 583 369 580 371C576 368 579 365 580 360C576 364 575 362 575 358C575 354 575 349 574 345C573 341 574 338 576 335C583 326 582 315 581 304C579 295 579 285 579 276C579 262 574 250 571 237C569 238 568 240 568 242C569 254 568 266 570 277C571 282 570 287 571 291C571 293 570 295 568 295C564 295 563 297 562 300C556 319 559 338 559 357C558 368 559 380 558 392C557 403 558 414 559 425C559 433 560 441 561 449C561 465 562 482 563 498C563 502 566 506 566 510C566 511 567 513 567 514C565 526 549 535 537 531C533 529 532 525 536 521C539 518 543 516 545 512C551 506 553 499 551 490Z',

  'M382 177C360 183 348 175 343 153C339 137 341 122 345 106C349 87 355 69 366 52C373 42 383 37 395 35C417 33 435 38 450 56C457 66 459 77 458 89C456 102 450 114 444 126C444 127 444 128 443 129C443 129 443 130 442 130C443 130 443 131 443 131C443 131 444 131 444 131C447 131 451 131 453 134C455 138 453 142 451 145C445 152 440 159 431 162C425 165 421 164 417 160L417 160C411 163 405 166 399 170C400 175 403 179 408 179C409 180 410 180 411 180C413 180 416 181 418 181C428 180 436 185 443 191C448 196 453 200 459 204L459 204C461 206 463 208 466 210C466 210 466 210 465 210L465 210C465 211 464 213 462 215C474 224 484 240 491 253C496 265 502 278 509 290C510 292 511 293 513 295L513 295C513 296 514 296 515 297C515 297 515 298 515 298C516 299 517 300 518 301C531 310 530 323 524 335C524 337 523 338 522 340L522 340C522 340 522 341 522 341C522 342 521 342 521 342C518 341 518 338 517 335C517 334 517 333 517 332C515 328 513 324 511 321L510 322L515 332L514 337C512 334 511 332 509 329C504 322 500 315 502 305C502 302 501 298 499 295C499 294 498 293 497 292C489 277 480 263 471 249C468 244 462 239 457 233L457 233C455 231 453 229 451 227C449 228 448 230 446 231L438 222L437 223L456 288C456 289 455 289 455 289C455 289 455 289 455 289C455 289 455 289 454 290C453 296 453 303 452 309L452 312C452 314 452 315 452 317C459 356 467 396 474 435C475 438 476 440 477 441C479 444 481 446 483 448L483 448C487 452 490 456 493 460C496 465 500 465 505 464C513 461 513 462 516 469C517 472 518 474 519 476L519 476C520 479 522 482 523 486C524 490 524 494 525 498L525 499C525 500 524 503 523 503C522 503 520 502 519 501C517 499 516 496 515 494C514 493 514 493 514 492C514 492 513 491 513 491C513 490 512 489 512 488C511 487 510 485 509 483C507 482 505 480 503 479L503 479C502 479 501 478 500 478C499 477 498 477 498 477C496 476 494 475 493 474C491 472 490 471 488 469L488 469C485 466 482 463 479 461L484 493C485 493 485 493 486 493C487 494 488 495 489 495C490 496 490 497 491 497L491 497C492 498 493 499 494 500C500 505 500 505 496 512C494 514 493 516 492 518C490 521 489 524 487 527C484 531 480 534 476 537C474 539 471 538 472 534C473 532 474 529 475 526C475 525 476 525 476 524C477 522 477 521 478 520C479 518 479 517 480 515C482 511 482 508 479 504C478 503 478 502 478 501C478 501 478 500 478 500C478 499 478 499 477 498C476 497 475 496 475 494C473 486 471 478 469 470L469 470C467 462 466 454 464 447C463 444 462 442 460 440C455 434 449 428 443 422L443 422C436 414 429 407 423 400C420 398 418 395 417 391C410 373 403 355 396 337L396 337L396 337C392 328 389 320 386 311C385 310 384 308 384 308C379 308 379 305 378 302C378 302 378 301 378 301C376 289 374 278 372 266C372 265 371 263 371 261C370 269 368 278 367 281C366 289 364 297 362 305C360 315 357 325 355 335C355 337 355 341 356 343C358 349 359 354 358 360C357 365 357 369 361 373C365 376 363 379 359 383C358 383 357 381 356 378C356 379 356 380 357 381C357 383 357 385 356 386C350 387 348 384 346 380L346 380C339 368 341 356 343 343C345 327 348 308 350 289C351 275 353 262 355 249C354 249 354 249 353 249C349 251 350 247 350 246L350 246C350 246 350 246 350 246C351 242 351 238 352 234L352 234C353 225 355 216 356 207C357 204 360 201 363 199C366 197 368 195 371 193L371 193C375 191 378 188 382 186C383 185 382 182 382 179C382 179 382 178 382 177ZM416 330C417 333 418 337 419 340L419 340C422 348 424 355 425 362C428 382 438 398 452 412C453 413 454 414 455 415C456 416 457 417 457 418C453 395 446 374 439 353C436 344 434 336 431 327L416 330Z',

  'M412 290C414 294 415 298 417 302C422 312 423 322 424 333C424 335 425 337 426 338C437 359 448 380 459 400C466 412 477 421 485 431C489 435 492 439 495 443C500 449 505 453 511 456C518 459 524 460 531 460C539 459 540 460 541 467C541 474 543 481 545 487C545 488 545 489 545 489C543 501 542 513 537 523C536 525 535 528 532 527C529 526 529 524 529 521C529 518 529 515 529 512C530 505 529 499 523 493C516 486 510 479 504 472C497 462 486 457 475 453C457 446 440 439 422 432C420 431 418 430 417 427C402 406 388 386 374 365C373 363 372 362 371 361C365 357 361 352 358 345C357 343 356 341 353 342C348 343 346 340 345 335C341 318 336 301 330 284C329 282 329 279 327 277C321 287 321 287 316 286C312 292 308 299 305 306C304 309 303 311 301 313C287 325 274 338 259 349C256 351 255 354 254 357C253 363 251 368 246 371C242 375 241 379 241 384C242 387 240 389 238 390C236 391 234 391 233 388C231 389 230 392 227 391C224 389 223 387 224 384C225 374 227 365 234 357C251 340 266 322 284 306C292 299 294 288 300 279C295 277 295 274 297 270C304 260 310 250 316 240C317 238 318 235 320 234C327 232 332 226 337 221C339 219 340 218 339 215C338 212 335 214 334 214C317 218 307 213 299 197C294 186 292 173 293 161C294 141 297 121 305 102C307 98 309 93 311 89C320 71 336 68 355 67C375 66 390 76 401 92C408 102 408 114 406 126C404 136 401 144 398 153C397 155 396 157 396 159C397 159 399 159 400 159C405 160 409 164 407 169C402 180 396 188 385 194C381 195 377 195 374 193C372 193 371 192 369 193C365 197 360 200 356 204C357 209 360 211 366 211C385 210 404 214 424 216C426 216 428 217 427 220C427 222 428 223 431 224C459 229 480 246 504 260C509 264 514 265 520 266C535 268 541 277 543 291C544 294 544 297 545 300C539 302 538 298 535 295C535 297 535 298 535 299C531 299 528 296 525 295C516 293 510 287 506 278C505 276 503 274 500 272C483 265 466 255 449 247C442 243 434 243 426 241C423 240 424 244 422 246C414 244 406 242 397 239C398 258 406 273 412 290ZM415 388C419 397 424 406 429 415C430 416 431 418 433 419C445 424 456 430 468 435C443 412 427 381 406 354C398 357 398 357 402 364C406 372 410 380 415 388ZM526 475C528 477 529 478 529 480C526 480 525 477 523 475C524 474 525 475 526 475Z',

  'M301 256C302 253 303 250 304 248C305 246 306 244 308 246C311 247 312 245 313 243C325 225 335 206 345 188C346 185 348 182 350 179C353 175 353 171 351 166C349 159 346 152 343 146C343 144 341 142 344 141C346 139 348 141 349 143C351 146 351 149 354 151C357 148 357 145 358 141C358 138 358 134 358 131C359 129 358 127 361 127C363 127 363 129 364 131C364 134 364 137 365 141C366 137 367 133 369 130C369 128 370 125 373 126C375 127 375 129 375 131C374 135 373 139 371 144C375 140 377 137 379 134C380 133 382 130 384 132C387 133 384 135 383 137C382 140 381 142 379 146C382 146 383 144 384 143C385 142 386 142 387 143C389 144 388 145 387 146C387 148 386 149 385 150C381 154 377 159 374 165C373 168 371 171 367 173C366 174 365 176 364 177C358 196 348 214 340 232C337 238 334 243 331 249C327 254 328 254 332 258C327 266 322 274 317 282C309 294 309 294 314 307C321 325 333 339 343 354C344 355 346 356 347 357C351 359 355 362 357 366C360 370 364 372 369 373C390 378 412 384 433 389C436 390 438 389 440 389C467 379 495 369 523 359C528 358 534 356 539 354C542 353 543 355 544 357C549 364 554 371 559 378C561 381 562 384 562 387C562 389 563 391 561 392C559 393 557 392 555 391C553 389 550 386 548 383C546 380 544 377 542 375C540 374 537 372 534 373C531 374 529 373 528 369C508 377 489 385 470 393C460 398 449 402 439 406C436 408 432 408 429 406C421 404 414 404 406 402C393 400 380 399 367 397C359 396 359 396 355 403C356 405 358 406 360 406C377 413 394 420 411 427C413 427 415 428 416 428C440 428 464 429 487 430C494 430 500 430 506 431C513 431 520 430 526 426C531 423 534 424 536 428C540 434 544 440 549 446C552 449 553 453 553 457C553 459 554 461 552 462C550 463 548 462 547 461C544 459 542 455 539 452C537 450 535 448 533 445C531 444 529 443 527 443C519 443 510 441 502 442C492 443 481 442 471 443C456 444 441 443 426 444C416 445 407 443 398 441C378 435 357 429 337 424C336 423 335 423 333 423C322 424 314 419 306 412C304 410 301 409 298 411C297 411 296 412 295 412C287 414 288 414 284 407C271 383 258 360 241 339C239 336 237 334 233 333C225 331 216 328 208 326C205 325 203 324 205 321C205 319 204 318 202 317C201 317 200 316 199 316C184 311 173 302 163 291C155 282 146 274 138 265C136 262 133 259 129 258C128 258 126 257 125 256C119 251 112 246 105 242C104 241 101 240 103 238C104 236 106 237 107 237C109 238 110 238 112 239C109 235 106 233 103 230C102 229 100 228 102 226C103 224 105 225 106 226C110 228 113 230 117 233C117 229 115 228 113 226C112 225 111 223 110 222C109 220 109 218 111 217C113 215 114 217 115 218C117 221 120 224 122 227C123 224 121 221 121 218C121 216 120 214 122 213C125 213 125 215 126 216C128 221 130 226 132 230C133 232 134 234 136 234C138 233 138 231 139 229C139 227 139 226 139 224C139 222 140 221 143 221C145 221 145 223 145 225C145 231 144 238 144 244C144 251 146 256 152 260C162 268 172 277 182 287C190 295 200 297 211 302C212 296 216 297 220 299C226 302 232 305 239 308C241 309 243 309 244 307C246 304 248 301 250 299C252 296 251 294 249 291C245 292 242 294 239 295C229 299 220 297 212 289C202 279 196 266 193 251C188 226 187 202 194 177C197 164 205 154 218 149C238 141 257 141 276 153C288 161 292 172 294 186C296 198 294 210 293 221C293 222 293 223 293 224C293 224 293 224 294 224C306 221 307 230 304 237C302 245 299 253 293 259C289 262 284 265 278 263C277 262 276 263 275 264C271 269 267 273 264 278C267 282 270 283 275 282C287 281 294 275 297 264C298 261 299 259 301 256Z',

  'M396 361C398 356 400 351 402 346C405 341 403 337 400 333C395 326 395 325 401 320C406 316 410 313 413 308C417 304 421 302 426 300C428 300 429 299 431 301C432 302 432 304 431 306C429 309 426 312 423 315C421 318 419 320 417 323C416 325 415 327 416 330C418 334 416 338 415 342C405 374 394 405 384 437C382 442 380 445 375 447C357 457 339 467 321 476C315 479 313 483 314 490C316 490 318 490 320 489C336 486 352 482 368 479C371 478 373 477 375 474C395 451 415 427 434 404C438 400 438 395 437 390C437 385 439 382 443 382C451 382 459 381 467 379C471 379 474 380 478 381C479 382 481 383 481 385C481 386 480 388 478 388C475 390 471 391 467 391C462 392 457 392 454 396C451 400 448 404 445 408C425 434 406 460 386 487C383 491 380 493 376 494C354 502 333 509 311 516C309 517 306 518 304 520C298 526 290 527 282 525C272 522 264 523 257 531C257 532 255 533 254 534C250 536 248 536 245 533C228 515 211 499 192 484C179 473 164 466 150 458C147 456 143 455 146 450C147 449 145 448 144 447C119 431 104 407 86 384C84 382 82 379 79 378C76 378 75 376 73 374C68 368 63 364 57 359C55 358 52 357 54 354C56 351 58 354 60 355C61 355 62 355 63 356C61 352 58 349 56 346C55 345 53 344 55 343C56 341 58 342 59 343C62 345 65 348 70 351C68 347 66 343 64 340C63 338 63 336 65 334C68 333 69 336 70 337C71 340 73 343 76 347C75 343 75 341 75 338C75 336 74 333 77 333C80 332 80 335 80 337C82 341 82 346 85 350C85 352 86 354 88 354C92 351 91 347 92 343C92 338 92 333 92 328C93 318 98 310 106 304C123 289 141 283 163 289C176 293 184 302 189 313C195 325 197 338 199 350C199 351 199 352 200 353C204 351 208 349 213 352C213 346 213 340 213 335C211 321 210 307 210 293C210 290 209 289 207 287C201 282 194 277 188 273C186 271 183 270 185 268C187 265 189 266 191 267C194 269 196 271 199 271C201 269 199 267 199 265C197 260 194 256 191 251C191 249 190 248 192 247C193 246 195 247 196 248C198 250 200 253 203 255C202 252 201 248 200 245C200 243 199 241 202 240C204 240 205 241 206 243C207 247 207 251 210 255C211 250 211 246 212 243C212 241 212 239 214 239C216 239 216 241 216 242C217 247 217 251 218 256C219 253 219 251 220 249C221 247 221 246 223 246C225 247 225 248 225 249C222 260 225 271 222 282C221 285 222 288 222 290C227 316 230 341 231 367C231 371 231 374 236 373C238 375 237 377 237 379C237 390 237 402 237 413C237 416 238 418 239 421C249 434 261 444 274 454C276 456 278 456 280 456C286 455 292 456 298 458C301 459 302 459 305 458C324 450 344 442 363 434C367 432 369 430 370 427C378 405 387 383 396 361ZM211 402C210 398 211 393 208 389C205 392 201 395 197 394C195 394 195 395 194 396C192 402 190 407 187 413C191 415 195 417 199 414C202 412 205 410 209 409C211 407 212 405 211 402ZM179 440C180 436 183 432 177 430C175 432 172 434 170 437C173 438 174 444 179 440ZM99 380C100 374 96 370 95 366C94 371 93 376 99 380Z',

  'M75 381C76 384 78 386 80 388C95 397 108 410 122 420C129 426 136 429 144 433C145 434 147 434 148 432C149 430 151 430 153 432C165 440 178 447 189 457C190 458 191 458 193 459C210 463 228 462 246 461C256 461 266 460 275 459C278 459 279 460 279 463C279 467 282 468 285 468C287 467 290 467 291 468C303 474 315 471 327 470C344 468 361 466 379 464C382 464 384 463 386 460C401 445 415 429 430 414C436 408 441 402 447 396C450 393 451 391 449 387C444 379 444 378 452 373C457 370 461 368 465 364C468 360 473 359 478 358C479 357 481 357 483 359C484 361 483 363 482 364C479 368 475 370 472 373C470 375 467 378 466 381C464 383 464 385 465 387C466 392 462 394 461 398C462 399 464 399 466 399C468 399 470 399 470 401C471 403 470 405 468 406C466 408 463 410 460 411C457 413 455 415 452 416C450 418 448 420 448 422C448 429 443 434 440 439C423 466 406 493 389 520C386 524 383 526 378 526C364 527 350 528 336 530C329 530 322 531 315 532C309 532 302 533 296 536C296 537 295 537 295 537C284 536 274 540 264 539C240 537 216 536 193 539C180 541 168 542 156 543C150 544 145 547 140 548C128 551 116 547 105 543C104 543 102 542 100 541C85 530 67 526 50 519C48 519 46 519 43 520C37 522 32 521 27 517C22 513 18 514 17 520C16 521 15 523 13 523C9 516 10 512 13 509C11 508 9 509 7 510C4 511 2 511 1 508C0 506 3 505 4 504C6 503 8 502 11 501C8 498 1 501 0 495C2 493 5 494 7 493C5 487 5 487 12 487C18 487 22 489 24 494C25 497 27 498 29 499C36 502 42 505 48 507C49 508 50 508 52 507C52 505 50 504 49 503C44 497 39 491 35 484C28 470 32 457 37 444C44 425 59 415 77 411C79 410 80 410 82 409C82 409 82 409 83 408C75 402 71 392 61 388C57 387 55 383 54 378C52 372 49 371 44 374C42 375 41 376 39 374C40 366 42 364 49 365C47 362 45 362 42 361C39 361 37 359 38 356C39 353 41 355 43 355C45 355 48 355 50 356C49 352 42 350 45 344C48 345 50 347 52 348C53 346 52 344 54 342C58 344 61 347 64 351C65 352 66 353 65 354C63 360 66 365 69 370C71 374 73 377 75 381ZM331 509C339 509 348 509 357 509C363 509 371 511 376 508C382 505 384 498 388 492C389 492 389 492 389 492C401 475 413 459 424 442C424 441 424 441 423 441C423 441 423 442 422 443C413 453 405 463 396 474C393 477 389 479 384 480C363 485 341 490 320 494C318 495 316 495 315 497C315 501 314 504 314 507C319 509 324 509 331 509Z',

  'M154 444C156 446 144 450 142 451L159 462C159 462 161 460 162 460C162 460 163 461 163 462C163 463 161 464 162 464C164 467 173 480 173 480C174 478 177 477 178 478C180 481 181 485 183 489C181 489 176 489 174 488C173 490 154 519 154 519C162 517 177 514 185 513C193 512 201 510 209 509C211 509 213 509 215 508C233 507 250 507 267 508C269 508 270 509 272 510C280 517 289 521 300 522C301 522 303 522 304 522C323 527 341 532 359 537C365 539 372 540 378 542C380 543 383 543 386 543C398 540 411 538 423 535C444 531 466 526 487 522C490 521 494 520 496 517C496 516 497 516 498 515C500 514 503 514 506 514C509 515 512 516 515 516C519 517 522 518 526 517C529 517 530 515 528 512C527 512 527 511 527 511C530 509 530 508 529 506C526 502 522 498 517 496C512 494 507 492 502 489C501 488 500 488 499 487C494 485 493 485 491 489C488 492 486 495 484 498C483 499 482 500 481 500C474 501 468 503 462 504C438 509 414 515 391 520C388 521 387 520 385 518C366 503 348 487 329 471C328 470 327 469 327 468C321 460 313 455 304 453C302 452 300 452 299 452C298 444 297 437 296 430C294 430 293 430 292 430C285 431 277 432 270 432C262 433 254 433 246 433C239 434 232 433 225 433C219 432 213 431 207 430C206 429 205 429 205 428C200 424 196 423 190 425C181 429 171 433 161 436C158 437 155 438 152 440C153 441 154 443 154 444ZM346 511C339 506 331 501 324 496C323 499 322 501 320 503C323 504 324 505 326 505C333 508 339 510 346 513C347 514 349 514 351 515C349 512 349 512 346 511ZM472 515C474 514 477 514 479 514C482 514 483 512 484 509C484 509 484 509 483 509C478 511 473 512 467 514C467 514 459 516 459 516C459 516 459 517 459 517C461 517 469 515 472 515Z M177 488C178 485 177 482 175 478C172 473 166 467 164 464C161 462 146 451 141 450C138 449 134 447 130 445C132 442 131 439 129 436C129 435 128 434 127 434C123 430 118 428 113 427C108 426 103 426 98 425C97 425 96 425 95 425C89 426 87 432 90 437C91 438 92 439 93 440C89 441 86 441 83 441C73 443 62 445 52 449C40 454 30 462 26 476C22 491 22 505 30 519C35 527 39 534 47 540C49 542 52 543 55 545C52 548 48 549 43 548C37 547 37 547 34 552C32 553 30 556 28 558C32 559 33 559 35 556C39 553 39 553 45 555C37 556 34 561 30 566C33 568 33 568 35 566C36 565 37 564 38 563C40 560 43 560 46 559C44 561 42 562 41 565C41 568 40 571 40 574C44 574 45 573 45 570C46 566 49 563 53 562C52 565 51 567 50 569C53 571 56 572 59 574C61 570 57 569 56 567C56 565 57 563 58 562C59 560 60 559 62 559C66 559 69 557 72 555C72 554 73 554 73 554C73 556 73 558 73 559C77 559 78 557 78 554C78 553 78 553 78 552C78 549 80 547 83 547C79 554 79 558 80 564C82 564 84 563 84 561C84 560 84 558 84 557C84 553 86 551 88 549C85 555 90 559 92 564C96 561 96 560 95 558C94 557 94 556 93 556C92 552 93 550 95 547C95 549 96 551 97 554C101 553 104 552 107 551C106 547 103 549 100 548C100 547 99 545 99 544C100 543 101 543 101 543C114 540 127 535 139 529C144 527 149 523 154 520C166 513 177 496 177 488Z',

  'M161 495C160 495 160 495 160 495C155 486 149 477 143 469C142 469 142 469 142 469C142 469 142 469 142 469C145 467 146 465 146 462C146 459 145 456 143 453C138 445 130 439 121 435C116 432 111 436 112 442C112 443 112 444 112 445C112 445 112 446 112 446C111 446 111 446 111 446C110 446 110 446 109 445C107 445 106 444 104 444C101 442 97 441 94 440C84 437 74 434 64 434C55 435 46 437 39 443C36 447 32 451 29 455C23 463 20 471 20 480C19 487 20 493 21 499C22 507 24 514 29 520C29 520 29 521 29 521C29 521 29 521 29 521L22 520C22 523 23 524 25 525C25 525 26 525 26 525C27 526 28 526 29 526C32 527 33 528 34 530C35 530 35 531 35 531C35 531 35 531 36 531C35 531 35 531 35 531C35 531 35 531 34 531L34 531C34 531 33 530 33 530C32 530 31 530 30 530C26 530 23 531 20 533C22 536 23 537 26 536C26 536 26 536 27 536C27 535 27 535 27 535C31 535 34 536 37 538L28 539L29 550C32 550 33 548 33 546C33 546 33 546 33 545C33 544 33 543 34 543L34 543C36 543 39 543 41 543C42 543 43 545 44 546C47 551 53 553 59 552C59 552 59 552 60 552C62 552 63 551 65 554C65 554 66 554 66 554C66 554 66 554 66 554C68 555 70 555 72 555C76 556 80 557 84 558C92 559 100 561 108 562C114 563 120 564 126 565C129 565 131 565 134 564C138 563 152 558 157 557C157 557 157 557 157 557C158 558 158 558 159 558C159 559 159 560 160 561C160 561 160 562 160 562C161 562 161 562 162 562C163 561 163 561 164 561C171 558 177 555 184 552C188 550 193 548 197 546C197 546 198 546 198 545C198 545 199 545 199 545C200 545 201 545 202 545C205 545 207 544 210 544C213 544 215 544 218 544C227 544 236 544 246 545C256 546 266 546 275 547C280 548 284 548 288 549C292 549 292 549 293 546C293 545 293 545 293 545C294 545 294 544 294 544C294 542 296 541 298 541C303 541 308 540 313 539C314 538 316 538 318 538C339 537 361 537 382 537C385 537 389 537 393 537C393 537 394 537 394 538C396 538 397 538 398 537C406 536 414 535 423 533C426 532 429 532 433 531C435 531 438 530 440 530C450 528 459 526 469 525C471 524 473 524 475 525C483 525 490 526 497 527C499 527 501 527 504 526C505 526 506 526 508 526C512 527 514 530 517 533C517 533 518 534 518 534C519 535 520 536 521 537C522 539 523 540 524 541C526 543 527 544 530 544C532 545 533 544 533 542C532 536 530 531 527 528C522 523 518 518 515 513C515 513 515 512 514 512C514 511 514 511 514 511C515 511 515 511 516 511C517 511 519 511 520 512C522 513 525 514 527 515C528 516 529 516 530 517C532 518 534 519 535 519C537 520 538 521 540 521C543 521 544 519 543 516C540 512 537 508 532 505C527 503 523 501 520 498C518 497 516 495 514 494C511 492 510 493 507 496C506 497 504 499 503 501C502 501 501 502 501 503C500 504 500 504 499 505C499 505 499 505 498 506C499 506 499 506 499 506C493 511 486 512 478 512C476 513 474 513 472 513C471 513 470 513 469 513C465 512 462 512 459 511C457 511 456 511 455 510C451 510 446 509 442 508C431 507 420 505 409 503C408 503 406 503 405 502C401 502 396 501 392 500C371 494 350 489 329 483C326 482 323 481 320 481C319 480 317 480 316 479C313 476 309 475 304 474C302 474 300 473 298 473C297 473 296 473 295 473L295 470C294 470 294 470 293 470C292 470 291 470 290 470C287 470 284 470 281 470C274 470 268 471 261 471L260 471C251 471 242 471 232 470C222 470 212 467 203 464C201 464 200 464 199 463C191 461 186 465 183 471C180 475 178 481 175 486C174 487 174 489 173 490C172 492 171 493 169 493C167 494 166 494 164 495C163 495 161 496 161 495ZM166 511C167 511 168 510 168 511C169 512 168 513 167 514C167 514 167 515 167 515C166 513 166 510 166 511ZM179 528C182 527 182 526 180 524C180 525 179 527 179 528ZM117 548C116 548 115 548 114 548C110 548 107 547 103 547L103 547L113 547C120 547 126 547 131 546C133 546 135 546 136 545C137 545 138 545 138 545C139 544 141 544 142 543C144 543 146 542 149 541L149 542C149 542 148 543 148 543C147 543 145 544 144 544C143 545 142 545 141 545C140 545 140 546 139 546C137 546 135 547 134 548C130 549 126 549 122 549C120 549 118 548 117 548ZM64 541C63 540 63 540 62 540C62 539 61 539 61 539C61 539 61 539 60 539C60 539 60 538 60 538C60 538 60 538 59 538L61 538C72 541 82 544 93 545C93 545 94 545 94 545C96 546 97 546 99 546C97 546 95 546 93 546C86 545 79 545 72 545C70 545 69 544 68 544C66 543 65 542 64 541ZM325 505L363 511C366 512 369 512 371 512C379 514 386 515 393 516C397 516 401 517 404 517C410 518 416 518 421 519C420 519 419 519 419 520C416 520 414 520 412 520C410 521 409 521 408 521C406 521 404 521 402 522C398 522 394 522 390 521C389 521 387 521 386 521C372 520 357 518 343 516C339 516 335 516 331 515C329 515 327 515 325 514V505Z',

  'M275 540C277 540 278 540 281 540C285 541 290 540 295 540H295L295 540C297 539 299 539 300 539C303 539 306 538 308 538C310 537 312 537 315 537C326 538 338 539 349 540C359 540 370 541 380 542C382 542 384 542 387 543H387C388 543 389 543 390 543C391 543 391 543 392 543L392 543C393 543 394 544 396 544C403 543 410 543 417 542H417C421 542 424 542 428 542C449 541 470 540 491 538C492 538 493 538 494 538C496 538 498 538 500 538C502 539 503 538 505 538C505 538 505 538 505 538L505 538C507 537 508 537 510 537C512 538 514 538 516 540C518 541 520 543 523 545C524 546 526 547 527 549C529 550 531 551 533 552C536 553 537 551 536 548C535 543 532 539 528 535C527 534 526 533 526 532C524 529 521 526 518 523C515 521 513 519 511 517C510 517 510 516 510 516C510 516 510 516 510 516C509 516 509 515 509 515C509 515 509 515 509 515C508 514 507 513 506 513C505 511 504 510 503 509C500 507 499 507 497 509C495 511 493 512 491 513L491 513L491 513L491 513L491 513C490 514 489 515 488 516C486 517 485 517 483 518C479 518 474 518 469 518H469C466 518 462 518 458 519C448 519 437 519 427 520L427 520C414 520 402 521 390 521C388 521 387 521 385 520C378 516 370 511 363 507L363 507C352 501 341 495 331 489C330 488 328 487 327 486C322 484 318 481 314 478C313 476 310 475 308 474L308 474L308 474C308 474 308 474 308 474C304 472 299 471 294 471C294 471 293 471 293 471C293 471 293 471 293 471C293 471 292 471 292 471L291 471C290 471 290 471 290 471L288 461C288 461 288 461 287 461C287 461 287 461 287 461C283 462 278 462 274 463L274 463H274C265 464 256 465 247 465C246 465 246 465 245 465L245 465L245 465C234 466 222 467 210 465C208 465 206 464 204 464C200 463 196 463 192 461C188 460 183 462 180 465C178 468 176 471 176 475C175 478 174 481 173 484L173 484C172 486 172 488 171 490C171 491 170 492 168 493C167 493 166 494 165 494L165 494C163 495 161 496 159 497C159 497 159 497 159 497C159 497 159 496 159 496L159 496C158 496 158 496 157 496C156 494 154 492 152 490L152 490L152 490C148 486 144 482 141 479C138 476 135 474 132 471C130 470 129 469 128 468C130 464 130 461 128 457C127 456 127 455 126 454C118 446 108 442 98 441C92 440 89 445 90 450C91 451 91 452 91 453C92 453 92 453 92 453C92 454 92 454 92 454C90 454 89 454 87 454L87 454L87 454L87 454L87 454L87 454C83 454 79 453 76 453C66 452 57 452 48 454C35 457 25 463 18 475C14 484 10 493 11 503C11 511 13 518 16 525C18 530 20 536 24 541C26 542 28 544 29 546C30 546 31 547 32 548L22 549C23 553 24 554 28 553C33 553 34 553 36 558C35 557 34 557 33 557L33 557C31 556 29 555 27 555C25 555 23 556 21 556L21 556C20 556 19 557 18 557C18 560 20 560 22 560C22 560 23 560 23 560C24 560 25 560 26 560C29 559 32 561 35 562C35 562 35 562 35 563C35 563 35 563 34 563C34 563 34 563 34 563L34 562L34 562C31 562 29 562 27 564C26 565 25 565 24 566C23 567 22 568 21 570C24 572 24 572 27 570C31 567 33 567 38 569L31 572C32 576 34 579 35 582C38 581 38 579 37 577C37 576 37 575 37 574C38 574 38 574 38 574C39 573 40 573 41 572C43 571 46 571 48 573C51 576 55 576 60 575C62 574 64 573 66 572C67 571 68 571 70 571C76 572 81 573 87 573C95 574 104 574 112 575H112C116 575 119 575 123 575C124 575 124 575 125 575C126 575 126 576 126 576L122 581C125 584 126 583 128 581C132 578 135 577 139 578L132 583C133 584 134 585 134 586L134 586C136 588 137 590 138 592C141 590 140 588 139 586C139 585 139 585 139 584C139 584 139 583 140 583L140 583L140 583C141 583 141 582 142 582C145 580 147 580 150 581C152 583 155 583 158 582C161 582 164 580 167 578C168 577 169 576 171 577C172 577 174 577 175 576C184 570 191 564 199 558C207 552 214 547 222 541C223 541 225 541 226 541C227 541 227 540 229 540C232 540 236 540 240 540C242 540 243 540 245 540C247 540 249 540 250 540L251 540H251C259 540 267 540 275 540ZM165 512C166 512 168 512 169 512C170 512 170 512 171 512C172 512 172 513 173 514C174 517 176 520 178 523L178 523L178 523L178 523L178 523L178 523C178 524 179 526 180 527L149 543C149 543 149 544 150 544C150 545 151 546 151 547C152 548 152 548 151 549C146 552 142 554 138 556C138 557 138 557 138 557C138 557 138 557 138 557C138 557 137 557 137 557C136 558 135 558 133 558C132 558 132 558 131 558C131 558 131 558 130 559C126 560 120 561 115 560C108 560 101 560 94 560C90 561 87 561 83 561H83C79 561 75 561 71 561C69 561 66 561 63 560C63 560 63 560 63 560C60 560 58 559 56 559L56 559C53 558 51 558 48 557C45 556 42 555 39 552C39 552 39 551 39 551C39 551 39 551 39 551C39 551 39 551 39 551C39 551 39 551 39 551L40 551C40 551 40 551 40 551L40 551C40 551 40 551 41 552C54 556 68 557 81 556C97 556 112 554 127 549C136 546 145 543 152 536C154 535 155 534 156 532C162 527 165 520 165 512ZM39 551L39 551C39 551 39 551 39 551ZM167 565C167 565 166 566 166 567C169 567 171 567 172 565C173 563 176 561 180 558L180 558L180 558C183 554 187 551 188 550C187 550 179 556 177 557L177 557L177 557C174 560 171 562 167 565ZM156 564C158 563 159 562 161 562C163 563 164 564 164 566C161 566 158 566 154 566L154 566C155 565 156 565 156 564ZM321 514C325 515 328 515 332 516C334 516 336 517 339 517L339 517L339 517L339 517L322 509L321 514ZM483 527C484 527 485 527 485 527L485 527C487 527 488 526 489 526C491 526 492 527 493 528L498 526C496 528 494 529 492 529C489 529 487 529 485 529C480 529 475 529 471 528C475 528 479 528 483 527Z',
];

export const Fall = ({positive, frame}: VerbProps) => {
  const stage = frame % paths.length;

  return (
    <View
      style={[
        StyleSheet.absoluteFill,
        {alignItems: 'center', justifyContent: 'center'},
      ]}>
      <Svg
        width="100%"
        height="100%"
        viewBox="0 0 600 600"
        fill={
          positive < 3
            ? Colors.green50
            : positive > 5
            ? Colors.amber50
            : Colors.red50
        }>
        <Circle id="background" opacity="0.5" cx="300" cy="300" r="300" />
        <Path d={paths[stage]} fill="black" />
      </Svg>
    </View>
  );
};